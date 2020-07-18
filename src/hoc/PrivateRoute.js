import React, { useContext } from 'react';
import { Route, Redirect } from 'react-router-dom';
import { AuthContext } from '../Auth';

const PrivateRoute = ({ component: RouteComponent, ...rest }) => {
    const { user } = useContext(AuthContext);
    return (
        <Route
            {...rest}
            render={props => 
                !!user ? (
                    <RouteComponent {...props} />
                ) : (
                    <Redirect to="/login" />
                )
            }
        />
    )
}

export default PrivateRoute;