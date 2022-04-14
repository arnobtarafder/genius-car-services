import React from 'react';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Checkout from '../../Checkout/Checkout/Checkout';
import Loading from '../../Shared/Loading/Loading';

const RequireAuth = () => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation()
    if(loading) {
        return <Loading />
    }
    if(!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }
    return (
        <div>
            <Checkout />
        </div>
    );
};

export default RequireAuth;