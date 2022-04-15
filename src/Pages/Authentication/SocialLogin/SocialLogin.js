import React from 'react';
import { useSignInWithGithub, useSignInWithGoogle } from 'react-firebase-hooks/auth';
import { useNavigate } from 'react-router-dom';
import auth from '../../../firebase.init';
import Loading from '../../Shared/Loading/Loading';

const SocialLogin = () => {
    const [signInWithGoogle, user, loading, error] = useSignInWithGoogle(auth);
    // const [signInWithGithub, user2, loading2, error2] = useSignInWithGoogle(auth);
    const [signInWithGithub, user2, loading2, error2] = useSignInWithGithub(auth);
    const navigate = useNavigate();
    let errorElement;

    if(loading || loading2) {
        return <Loading />
    }

    if(error || error2) {
        return (
        errorElement = <div>
            <p className="text-danger">Error: {error?.message} {error2?.message}</p>
            </div>
        )
    }
    if (user || user2) {
        navigate("/home")
    }


    return (
        <div>
        <div className='d-flex align-items-center'>
            <div style={{height: "1px"}} className='bg-primary w-50'></div>
            <p className='mt-3 px-3'>or</p>
            <div style={{height: "1px"}} className='bg-primary w-50'></div>
         </div>   
         {errorElement}
            <div className=''>

                <button
                    onClick={() => signInWithGoogle()}

                    className='btn btn-primary w-50'>
                    <img style={{width: "30px"}} src="https://seeklogo.com/images/N/new-google-favicon-logo-5E38E037AF-seeklogo.com.png" alt="" />
                    <span className='px-3'>Google Sign In</span>
                </button>

                <button className='btn btn-info w-50 my-3'>
                    <img style={{width: "30px"}} src="https://github.com/ProgrammingHero1/genius-car-service-direction-module-62/blob/main/src/images/social/facebook.png?raw=true" alt="" />
                    <span className='px-3'>Facebook Sign In</span>
                </button>

                <button 
                    onClick={() => signInWithGithub()}

                    className='btn btn-primary w-50'>
                    <img style={{width: "30px"}} src="https://github.com/ProgrammingHero1/genius-car-service-direction-module-62/blob/main/src/images/social/github.png?raw=true" alt="" />
                    <span className='px-3'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;