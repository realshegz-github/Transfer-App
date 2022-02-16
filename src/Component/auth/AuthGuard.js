import React from 'react';
import { Navigate } from 'react-router-dom';

const AuthRoute = ({Component}) => {
    const initialAuthState = JSON.parse(localStorage.getItem('token'))

    const token = !!initialAuthState?.token

    return token ? <Component /> : <Navigate to="/" />
};

export {AuthRoute};
