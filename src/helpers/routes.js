import React from 'react';
import { Redirect, Route } from 'react-router-dom';

export function IsUserRedirect({user, loggedInPath, children, ...rest}) {
    return(
        <Route
            {...rest}
            render={() => {
                if(!user) {
                    //Render Login Page
                    return children;
                }
                if(user) {
                    //Redirect to Browse Page
                    return (
                        <Redirect
                            to={{
                                pathname: loggedInPath
                            }}
                        />
                    );   
                }
                //If neither, return null
                return null;
            }}
        />
    );
}

export function ProtectedRoute({user, children, ...rest}) {
    return(
        <Route
            {...rest}
            render={({location}) => {
                if (user) {
                    return children;
                }
                if(!user) {
                    return(
                        <Redirect
                            to={{
                                pathname: 'signin',
                                state: {from: location},
                            }}
                        />
                    );
                }
                return null;
            }}
        />
    );
}