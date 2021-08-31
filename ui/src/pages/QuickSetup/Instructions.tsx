import React, { useState } from 'react';

import { useLedger } from '@daml/react';
import { Party, Optional } from '@daml/types';
import _ from 'lodash';

import {
  OperatorOnboarding,
  OnboardingInstruction,
} from '@daml-ui.js/da-marketplace-ui/lib/UI/Onboarding';

import { useStreamQueries } from '../../Main';
import Credentials from '../../Credentials';
import { useVerifiedParties } from '../../config';
import QuickSetupPage from './QuickSetupPage';
import {
  Form,
  Button,
  Header,
  Divider,
  Segment,
  DropdownProps,
  InputOnChangeData,
  DropdownItemProps,
} from 'semantic-ui-react';
import { createDropdownProp } from '../common';
import { ArrowRightIcon } from '../../icons/icons';
import SelectRolesPage from './SelectRolesPage';

const InstructionsPage = (props: { adminCredentials: Credentials }) => {
  const { adminCredentials } = props;

  return (
    <QuickSetupPage
      className="instructions"
      title="Assign Roles"
      adminCredentials={adminCredentials}
    >
      <TestInstructions />
    </QuickSetupPage>
  );
};

enum FieldType {
  PARTIES = 'PARTIES',
  TEXT = 'TEXT',
}

enum InstructionType {
  TRADING = 'Trading',
  CUSTODY = 'Custody',
  CLEARING = 'Clearing',
  BIDDING = 'Bidding',
  ISSUANCE = 'Issuance',
  AUCTION = 'Auction',
}

const makeCustodyInstruction = (provider: Party): OnboardingInstruction => {
  return { tag: 'OnboardCustody', value: { provider } };
};

const makeTradingInstruction = (
  provider: Party,
  custodian: Party,
  optTradingAccount: Optional<string>
): OnboardingInstruction => {
  return { tag: 'OnboardTrading', value: { custodian, provider, optTradingAccount } };
};

const makeBiddingInstruction = (
  provider: Party,
  custodian: Party,
  optTradingAccount: Optional<string>
): OnboardingInstruction => {
  return { tag: 'OnboardBidding', value: { custodian, provider, optTradingAccount } };
};

const makeIssuanceInstruction = (
  provider: Party,
  custodian: Party,
  optSafekeepingAccount: Optional<string>
): OnboardingInstruction => {
  return { tag: 'OnboardIssuance', value: { custodian, provider, optSafekeepingAccount } };
};

const makeClearingInstruction = (
  provider: Party,
  custodian: Party,
  optClearingAccount: Optional<string>
): OnboardingInstruction => {
  return { tag: 'OnboardClearing', value: { custodian, provider, optClearingAccount } };
};

const makeAuctionInstruction = (
  provider: Party,
  custodian: Party,
  optTradingAccount: Optional<string>,
  optReceivableAccount: Optional<string>
): OnboardingInstruction => {
  return {
    tag: 'OnboardAuction',
    value: { custodian, provider, optTradingAccount, optReceivableAccount },
  };
};

const makeInstruction = (inst: InstFieldsWithType): OnboardingInstruction => {
  switch (inst.instructionType) {
    case InstructionType.TRADING: {
      return makeTradingInstruction(
        inst.fields.provider || '',
        inst.fields.custodian || '',
        inst.fields.tradingAccount || null
      );
    }
    case InstructionType.BIDDING: {
      return makeBiddingInstruction(
        inst.fields.provider || '',
        inst.fields.custodian || '',
        inst.fields.tradingAccount || null
      );
    }
    case InstructionType.CLEARING: {
      return makeClearingInstruction(
        inst.fields.provider || '',
        inst.fields.custodian || '',
        inst.fields.clearingAccount || null
      );
    }
    case InstructionType.AUCTION: {
      return makeAuctionInstruction(
        inst.fields.provider || '',
        inst.fields.custodian || '',
        inst.fields.tradingAccount || null,
        inst.fields.receivableAccount || null
      );
    }
    case InstructionType.ISSUANCE: {
      return makeIssuanceInstruction(
        inst.fields.provider || '',
        inst.fields.custodian || '',
        inst.fields.safekeepingAccount || null
      );
    }
    case InstructionType.CUSTODY: {
      return makeCustodyInstruction(inst.fields.provider || '');
    }
    default: {
      return makeCustodyInstruction('');
    }
  }
};

type InstructionFields = { [k: string]: string | undefined };

type CustodyInstructionFields = {
  provider?: string;
};

type TradingInstructionFields = {
  provider?: string;
  custodian?: string;
  tradingAccount?: string;
};

type ClearingInstructionFields = {
  provider?: string;
  custodian?: string;
  clearingAccount?: string;
};

type BiddingInstructionFields = {
  provider?: string;
  custodian?: string;
  tradingAccount?: string;
};

type IssuanceInstructionFields = {
  provider?: string;
  custodian?: string;
  safekeepingAccount?: string;
};

type AuctionInstructionFields = {
  provider?: string;
  custodian?: string;
  tradingAccount?: string;
  receivableAccount?: string;
};

type InstFieldsWithType = {
  instructionType: InstructionType;
  fields: InstructionFields;
};

const getFields = (inst: InstFieldsWithType) => {
  switch (inst.instructionType) {
    case InstructionType.TRADING: {
      return {
        provider: FieldType.PARTIES,
        custodian: FieldType.PARTIES,
        tradingAccount: FieldType.TEXT,
      };
    }
    case InstructionType.CLEARING: {
      return {
        provider: FieldType.PARTIES,
        custodian: FieldType.PARTIES,
        clearingAccount: FieldType.TEXT,
      };
    }
    case InstructionType.BIDDING: {
      return {
        provider: FieldType.PARTIES,
        custodian: FieldType.PARTIES,
        tradingAccount: FieldType.TEXT,
      };
    }
    case InstructionType.AUCTION: {
      return {
        provider: FieldType.PARTIES,
        custodian: FieldType.PARTIES,
        tradingAccount: FieldType.TEXT,
        receivableAccount: FieldType.TEXT,
      };
    }
    case InstructionType.ISSUANCE: {
      return {
        provider: FieldType.PARTIES,
        custodian: FieldType.PARTIES,
        safekeepingAccount: FieldType.TEXT,
      };
    }
    case InstructionType.CUSTODY: {
      return {
        provider: FieldType.PARTIES,
      };
    }
    default: {
      return {};
    }
  }
};

const newInstructionFields = (it: InstructionType) => {
  switch (it) {
    case InstructionType.TRADING: {
      return {} as TradingInstructionFields;
    }
    case InstructionType.CUSTODY: {
      return {} as CustodyInstructionFields;
    }
    case InstructionType.CLEARING: {
      return {} as ClearingInstructionFields;
    }
    case InstructionType.AUCTION: {
      return {} as AuctionInstructionFields;
    }
    case InstructionType.BIDDING: {
      return {} as BiddingInstructionFields;
    }
    case InstructionType.ISSUANCE: {
      return {} as IssuanceInstructionFields;
    }
  }
};

const investorInstructions = () => {
  return [InstructionType.CUSTODY, InstructionType.TRADING, InstructionType.BIDDING].map(it => {
    return { instructionType: it, fields: newInstructionFields(it) };
  });
};

const issuerInstructions = () => {
  return [InstructionType.ISSUANCE, InstructionType.AUCTION].map(it => {
    return { instructionType: it, fields: newInstructionFields(it) };
  });
};

const TestInstructions = () => {
  const ledger = useLedger();

  const { identities } = useVerifiedParties();

  const [onboardParty, setOnboardParty] = useState('');
  const [instructionFields, setInstructionFields] = useState<InstFieldsWithType[]>([]);
  const [manualAssignment, setManualAssignment] = useState<boolean>(false);

  const { contracts: onboardingContracts } = useStreamQueries(OperatorOnboarding);

  const partyOptions = identities.map(p => {
    return createDropdownProp(p.payload.legalName, p.payload.customer);
  });

  if (!onboardingContracts.length) return <>Operator is missing onboarding contract!</>;
  const onboardingContract = onboardingContracts[0];

  async function doRunOnboarding() {
    const instructions = instructionFields.map(inst => makeInstruction(inst));
    await ledger.exercise(
      OperatorOnboarding.OperatorOnboard_Onboard,
      onboardingContract.contractId,
      {
        instructions,
        party: onboardParty,
      }
    );
    setOnboardParty('');
    setInstructionFields([]);
  }

  return (
    <>
      {manualAssignment ? (
        <>
          <SelectRolesPage />
          <Button
            onClick={() => {
              setInstructionFields([]);
              setManualAssignment(false);
            }}
          >
            Back
          </Button>
        </>
      ) : instructionFields.length === 0 ? (
        <div className="role-list">
          {[
            createDropdownProp(InstructionType.TRADING, InstructionType.TRADING),
            createDropdownProp(InstructionType.CUSTODY, InstructionType.CUSTODY),
            createDropdownProp(InstructionType.BIDDING, InstructionType.BIDDING),
            createDropdownProp(InstructionType.CLEARING, InstructionType.CLEARING),
            createDropdownProp(InstructionType.ISSUANCE, InstructionType.ISSUANCE),
            createDropdownProp(InstructionType.AUCTION, InstructionType.AUCTION),
            createDropdownProp('Investor', 'INVESTOR_TEMPLATE'),
            createDropdownProp('Issuer', 'ISSUER_TEMPLATE'),
          ].map(data => (
            <Button
              className="ghost"
              onClick={() => {
                if ((data.value as string) === 'INVESTOR_TEMPLATE') {
                  setInstructionFields(investorInstructions());
                } else if ((data.value as string) === 'ISSUER_TEMPLATE') {
                  setInstructionFields(issuerInstructions());
                } else {
                  setInstructionFields([
                    {
                      instructionType: data.value as InstructionType,
                      fields: newInstructionFields(data.value as InstructionType),
                    },
                  ]);
                }
              }}
            >
              {data.text}
            </Button>
          ))}
          <Button className="ghost" onClick={() => setManualAssignment(true)}>
            Other
          </Button>
        </div>
      ) : (
        <div className="instruction-list">
          <Segment basic>
            <Form>
              {instructionFields.map((fields, idx) => (
                <InstructionFieldInputs
                  currentFields={fields}
                  idx={idx}
                  instructionFields={instructionFields}
                  setInstructionFields={setInstructionFields}
                  partyOptions={partyOptions}
                />
              ))}
              <Form.Select
                disabled={false}
                className="request-select"
                label={<p className="input-label">Party</p>}
                placeholder="Select..."
                onChange={(_, data: any) => {
                  setOnboardParty(data.value as string);
                }}
                options={partyOptions}
                value={onboardParty}
              />
              <Button className="ghost submit" onClick={doRunOnboarding}>
                Submit
              </Button>
            </Form>
          </Segment>
          <Button
            onClick={() => {
              setInstructionFields([]);
              setManualAssignment(false);
            }}
          >
            Back
          </Button>
        </div>
      )}
    </>
  );
};

type InstructionFieldsProps = {
  currentFields: InstFieldsWithType;
  idx: number;
  instructionFields: InstFieldsWithType[];
  setInstructionFields: React.Dispatch<React.SetStateAction<InstFieldsWithType[]>>;
  partyOptions: DropdownItemProps[];
};

const InstructionFieldInputs: React.FC<InstructionFieldsProps> = ({
  currentFields,
  idx,
  instructionFields,
  setInstructionFields,
  partyOptions,
}) => {
  return (
    <div className="instruction-fields">
      <div className="instruction-header">
        <Header as="h2">{currentFields.instructionType}</Header>
      </div>
      <Form.Group>
        {_.toPairs(getFields(currentFields)).map(([k, field]) => {
          const updateInstructionTypes = (_: any, data: DropdownProps | InputOnChangeData) => {
            setInstructionFields(old => {
              let listCopy = [...old];
              let instCopy = { ...currentFields };
              instCopy.fields[k] = data.value as string;
              listCopy[idx] = instCopy;
              return listCopy;
            });
          };
          if (field === FieldType.PARTIES) {
            return (
              <Form.Select
                disabled={false}
                className="request-select"
                label={<p className="input-label">{k}</p>}
                placeholder="Select..."
                onChange={updateInstructionTypes}
                options={partyOptions}
                value={instructionFields[idx].fields[k] || ''}
              />
            );
          } else {
            return (
              <Form.Input
                disabled={false}
                className="request-select"
                label={<p className="input-label">{k}</p>}
                placeholder="Select..."
                onChange={updateInstructionTypes}
                value={instructionFields[idx].fields[k]}
              />
            );
          }
        })}
      </Form.Group>
      <Divider horizontal> </Divider>
    </div>
  );
};

export default InstructionsPage;
