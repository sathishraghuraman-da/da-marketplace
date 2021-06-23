import React, { useEffect, useState } from 'react';
import AccountComponent from '../custody/Account';
import { Service as CustodyService } from '@daml.js/da-marketplace/lib/Marketplace/Custody/Service';
import { useLedger, useParty } from '@daml/react';
import { useStreamQueries } from '../../Main';
import { AssetSettlementRule } from '@daml.js/da-marketplace/lib/DA/Finance/Asset/Settlement';
import { AssetDescription } from '@daml.js/da-marketplace/lib/Marketplace/Issuance/AssetDescription';
import { Role as ExchangeRole } from '@daml.js/da-marketplace/lib/Marketplace/Trading/Role';
import { CreateEvent } from '@daml/ledger';
import FormErrorHandled from '../../components/Form/FormErrorHandled';
import { Button, Form } from 'semantic-ui-react';
import Tile from '../../components/Tile/Tile';
import { FeeSchedule } from '@daml.js/da-marketplace/lib/Marketplace/Trading/Model';

type Props = {
  role: CreateEvent<ExchangeRole, any, any>;
};

const ManageFees: React.FC<Props> = ({ role }: Props) => {
  const ledger = useLedger();
  const party = useParty();
  const custodyServices = useStreamQueries(CustodyService).contracts;
  const { contracts: feeSchedules, loading: schedulesLoading } = useStreamQueries(FeeSchedule);
  const feeSchedule = feeSchedules.find(fs => fs.payload.provider === party);

  const [assetLabel, setAssetLabel] = useState(feeSchedule?.payload.currentFee.currency.label);
  const [accountLabel, setAccountLabel] = useState('');
  const [quantity, setQuantity] = useState(
    !!feeSchedule ? feeSchedule.payload.currentFee.amount : ''
  );

  useEffect(() => {
    if (!feeSchedule) return;
    setAssetLabel(feeSchedule.payload.currentFee.currency.label);
    setQuantity(feeSchedule.payload.currentFee.amount);
    setAccountLabel(feeSchedule.payload.feeAccount.id.label);
  }, [feeSchedule]);

  const assets = useStreamQueries(AssetDescription).contracts;

  const asset = assets.find(c => c.payload.assetId.label === assetLabel);
  const assetSettlementRules = useStreamQueries(AssetSettlementRule).contracts;
  const accounts = assetSettlementRules
    .map(c => c.payload.account)
    .filter(acc => acc.owner === party);
  const account = accounts.find(a => a.id.label === accountLabel);
  const accountRule = assetSettlementRules.find(ar => ar.payload.account.id.label === accountLabel);

  const canRequest = !feeSchedule
    ? !!assetLabel && !!asset && !!accountLabel && !!account && !!quantity
    : !!quantity;

  if (!role)
    return (
      <div>
        <h2>Party "{party}" can not setup a Fee Schedule.</h2>
      </div>
    );

  const createFeeSchedule = async () => {
    if (!feeSchedule) {
      if (!asset || !account) return;
      await ledger.exercise(ExchangeRole.CreateFeeSchedule, role.contractId, {
        currency: asset.payload.assetId,
        feeAccount: account,
        quantity,
      });
    } else {
      if (!asset) return;
      await ledger.exercise(FeeSchedule.UpdateFeeSchedule, feeSchedule.contractId, {
        amount: quantity,
        currency: asset.payload.assetId,
      });
    }
  };

  return (
    <div className="page-section-row">
      <Tile className="inline" header="Setup Fees">
        <br />
        {!schedulesLoading && (
          <FormErrorHandled onSubmit={createFeeSchedule}>
            {!feeSchedule && (
              <>
                <Form.Select
                  selection
                  label="Fee Account"
                  options={accounts.map(c => ({
                    text: c.id.label,
                    value: c.id.label,
                  }))}
                  value={accountLabel}
                  onChange={(_, d) => setAccountLabel((d.value && (d.value as string)) || '')}
                />
              </>
            )}
            <Form.Select
              selection
              label="Currency"
              options={assets.map(c => ({
                text: c.payload.assetId.label,
                value: c.payload.assetId.label,
              }))}
              value={!!feeSchedule ? assetLabel : assetLabel}
              onChange={(_, d) => setAssetLabel((d.value && (d.value as string)) || '')}
            />

            <Form.Input
              placeholder={!!feeSchedule ? feeSchedule.payload.currentFee.amount : quantity}
              required
              fluid
              number
              label="Fee Amount"
              value={quantity}
              onChange={e => setQuantity(e.currentTarget.value)}
            />

            <Button type="submit" disabled={!canRequest} className="ghost">
              {!!feeSchedule ? 'Update Fee Schedule' : 'Create Fee Schedule'}
            </Button>
          </FormErrorHandled>
        )}
      </Tile>
      <Tile className="inline">
        <br />
        {!!accountRule && (
          <AccountComponent
            targetAccount={{
              account: accountRule.payload.account,
              contractId: accountRule.contractId,
            }}
            services={custodyServices}
          />
        )}
      </Tile>
    </div>
  );
};

export default ManageFees;
