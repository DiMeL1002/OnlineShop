import React from 'react';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import MediaQuery from 'react-responsive'

import routes from '~/routes/routes'

import Header from '~c/header/header'
import HeaderMobile from '~c/header/headerMobile'

import './app.scss'

export default class extends React.Component {
    render() {
        let routesComponents = routes.map((route) => {
            return <Route
                        path={route.url}
                        component={route.component}
                        exact={route.exact}
                        key={route.url}
                    />;
        });

        return (
            <Router>
                <div className="wrapper">
                    <div className="content">
                    <MediaQuery minDeviceWidth={577}>
                        <Header/>
                    </MediaQuery>
                    <MediaQuery maxDeviceWidth={576}>
                        <HeaderMobile />
                    </MediaQuery>
                        <div className="container">
                            <Switch>
                                {routesComponents}
                            </Switch>
                        </div>
                    </div>
                </div>
                <div className="footer"></div>
            </Router>
        );
    }
}