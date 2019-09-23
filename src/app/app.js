import React from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import MediaQuery from 'react-responsive'
import { Provider } from 'mobx-react';

import routes from '~/routes/routes'
import stores from '~s/main'

import Header from '~c/header/header'
import HeaderMobile from '~c/header/headerMobile'
import Footer from '~c/footer/footer'

import './app.scss'

export default class extends React.Component {
    render() {
        let routesComponents = routes.map((route) => {
            return ( 
                <Route path={route.url}
                       component={route.component}
                       exact={route.exact}
                       key={route.url}
                />
            )
        });

        return (
            <Provider stores={stores}>
                <Router>
                    <div className="wrapper">
                        <div className="content">
                        <MediaQuery minDeviceWidth={577}>
                            <Header />
                        </MediaQuery>
                        <MediaQuery maxDeviceWidth={576}>
                            <HeaderMobile />
                        </MediaQuery>
                            <Switch>
                                {routesComponents}
                            </Switch>
                        </div>
                        <Footer />
                    </div>
                </Router>
            </Provider>
        );
    }
}