import React, { Component, Fragment } from 'react';
import PublicRoutes from './PublicRoutes';
import PrivateRoutes from './PrivateRoutes';
import Helmet from 'react-helmet';
import {TITLE, AUTH_USER_TOKEN_KEY} from '../utils/constants';
import { BrowserRouter as Router, Redirect, Route, Switch, Link } from 'react-router-dom';
import * as jwtDecode from 'jwt-decode';
import { validate } from 'graphql';
import { validateToken } from '../utils/helpers';
import ScrollToTop from '../utils/scrollToTop';

const PrivateRoute = ({
    component: Component,
    title,
    path,
    ...rest
}: any & {component: any}) => (
    <Route
        {...rest}
        render={props => {
            return validateToken(localStorage.getItem(AUTH_USER_TOKEN_KEY)) ? (
                <Fragment>
                    <Helmet title={TITLE}/>
                    <Component {...props} {...rest}/>
                </Fragment>
            ) : (
                <Redirect to={{ pathname: '/login'}}/>
            )
        }}
    />
)

const AppNavigation: React.FC = () => {
    return(
    <Router>
        <ScrollToTop>
        <React.Fragment>
            <Helmet title={TITLE}/>
            <Switch>
                {
                    PublicRoutes.map((route,i) => {
                        return <Route key={i} {...route} />;
                    })
                }
                {
                    PrivateRoutes.map((route,i) => {
                        return <PrivateRoute key={i} {...route}/>
                    })
                }
            </Switch>
        </React.Fragment>
        </ScrollToTop>
    </Router>
    )
}

export default AppNavigation;