import React from 'react';
import PublicRoutes from './PublicRoutes';
import Helmet from 'react-helmet';
import {TITLE} from '../utils/constants';
import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';

const AppNavigation: React.FC = () => {
    return(
    <Router>
        <React.Fragment>
            <Helmet title={TITLE}/>
            <Switch>
                {
                    PublicRoutes.map((route,i) => {
                        return <Route key={i} {...route} />;
                    })
                }
            </Switch>
        </React.Fragment>
    </Router>
    )
}

export default AppNavigation;