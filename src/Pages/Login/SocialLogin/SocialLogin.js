import React from 'react';

const SocialLogin = () => {
    return (
        <div>
        <div className='d-flex align-items-center'>
            <div style={{height: "1px"}} className='bg-primary w-50'></div>
            <p className='mt-3 px-3'>or</p>
            <div style={{height: "1px"}} className='bg-primary w-50'></div>
         </div>   
            <div className=''>

                <button className='btn btn-primary d-block mx-auto w-50'>
                    <img style={{width: "30px"}} src="https://seeklogo.com/images/N/new-google-favicon-logo-5E38E037AF-seeklogo.com.png" alt="" />
                    <span className='px-3'>Google Sign In</span>
                </button>

                <button className='btn btn-info d-block mx-auto w-50 my-3'>
                    <img style={{width: "30px"}} src="https://github.com/ProgrammingHero1/genius-car-service-direction-module-62/blob/main/src/images/social/facebook.png?raw=true" alt="" />
                    <span className='px-3'>Facebook Sign In</span>
                </button>

                <button className='btn btn-primary d-block mx-auto w-50'>
                    <img style={{width: "30px"}} src="https://github.com/ProgrammingHero1/genius-car-service-direction-module-62/blob/main/src/images/social/github.png?raw=true" alt="" />
                    <span className='px-3'>Github Sign In</span>
                </button>
            </div>
        </div>
    );
};

export default SocialLogin;