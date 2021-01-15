import React from 'react'
import { Grid, Menu } from 'semantic-ui-react'

import TopMenu from './TopMenu'

import './Page.scss'

type Props = {
    className?: string;
    menuTitle?: React.ReactElement;
    sideNav: React.ReactElement;
    notifications?: React.ReactElement[];
    onLogout: () => void;
    isLandingPage?: boolean;
}

const Page: React.FC<Props> = ({ children, className, menuTitle, sideNav, notifications, onLogout, isLandingPage }) => {
    return (
        <Grid className={'page-content ' + className}>
            <Grid.Column className="page-sidemenu">
                <Menu secondary vertical>
                    { sideNav }
                </Menu>
            </Grid.Column>
            <Grid.Column className='page-body'>
                <TopMenu onLogout={onLogout} title={menuTitle} notifications={notifications} isLandingPage={isLandingPage}/>
                { children }
            </Grid.Column>
        </Grid>
    )
}

export default Page
