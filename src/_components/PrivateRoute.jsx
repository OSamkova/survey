import React from 'react';
import { Route, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';

const PrivateRoute = ({ component: Component, ...rest }) => (
    <Route {...rest} render={props => (
        rest.results && rest.results.final
            ? <Component {...props} />
            : <Redirect to='/' />
    )} />
)

function mapStateToProps(state) {
    const { results } = state;
    return {
        results
    };
}

const connectedPrivateRoute = connect(mapStateToProps)(PrivateRoute);
export { connectedPrivateRoute as PrivateRoute }; 