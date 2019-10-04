import {BrowserRouter as Router, Route, Redirect} from 'react-router-dom';
import React, {Suspense, lazy, Fragment} from 'react';

import {
    ToastContainer,
} from 'react-toastify';

const Dashboards = lazy(() => import('../../DemoPages/Dashboards'));

const Login = lazy(() => import('../../DemoPages/Login'));

const AppMain = () => {

    return (
        <Fragment>

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Aguarde...
                        </h6>
                    </div>
                </div>
            }>
            <Route path="/login" component={Login}/>
            </Suspense>

            <Suspense fallback={
                <div className="loader-container">
                    <div className="loader-container-inner">
                        <h6 className="mt-3">
                            Aguarde...
                        </h6>
                    </div>
                </div>
            }>
                <Route path="/dashboards" component={Dashboards}/>
            </Suspense>

            <Route exact path="/" render={() => (
                <Redirect to="/dashboards/basic"/>
            )}/>
            
            <ToastContainer/>
        </Fragment>
    )
};

export default AppMain;