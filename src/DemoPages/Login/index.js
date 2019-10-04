import React, {Fragment} from 'react';
import {Route} from 'react-router-dom';

// LOGIN

import Registrar from './Registrar/Registrar'
import Logar from './Logar/Logar'
import Agenda from '../Agenda/Agenda'

import AppHeader from '../../Layout/AppHeader/';
import AppSidebar from '../../Layout/AppSidebar/';
import AppFooter from '../../Layout/AppFooter/';

const Login = ({match}) => (
    <Fragment>
        <AppHeader/>
        <div className="app-main">
            <AppSidebar/>

            <div className="app-main__outer">
                <div className="app-main__inner">

                    <Route path={`${match.url}/logar`} component={Logar}/>

                    <Route path={`${match.url}/registrar`} component={Registrar}/>

                    <Route path={`${match.url}/agenda`} component={Agenda}/>
                </div>
            </div>
        </div>
    </Fragment>
);

export default Login;