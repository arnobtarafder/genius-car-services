import React from 'react';
import { useAuthState, useSendEmailVerification } from 'react-firebase-hooks/auth';
import { Navigate, useLocation } from 'react-router-dom';
import auth from '../../../firebase.init';
import Checkout from '../../Checkout/Checkout/Checkout';
import Loading from '../../Shared/Loading/Loading';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const RequireAuth = ({children}) => {
    const [user, loading] = useAuthState(auth);
    const location = useLocation();
    const [sendEmailVerification, sending, error] = useSendEmailVerification(auth)
    if(loading) {
        return <Loading />
    }
    if(!user) {
        return <Navigate to="/login" state={{ from: location }} replace />
    }

    if(!user?.emailVerified) {
        return <div>
            <h3 className='text-danger text-center mt-5'>Your Email Is Not Varified</h3>
            <h5 className='text-success text-center'>Please Verify Your Email Address</h5>
            <div className="text-center">
            <button
                onClick={async () => {
                    await sendEmailVerification();
                    toast("Sent email")
                }} 
                className='btn btn-primary rounded-pill px-5 mt-3'>
                    Verify Email
            </button>
            </div>
            <ToastContainer />
        </div>
    }

    return (
        <div>
            {children}
        </div>
    );
};

export default RequireAuth;