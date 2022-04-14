import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css';
import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import auth from '../../../firebase.init'
import SocialLogin from '../SocialLogin/SocialLogin';


const Register = () => {
    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

    const navigate = useNavigate()

    const navigateLogin = () => {
        navigate("/login");
    }

    if(user){
        navigate("/home");
    }

    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;
        const password = event.target.password.value;

        createUserWithEmailAndPassword(email, password)
        // console.log(email);
    }

    return (
        <div className='register-form mt-5'>
            <h1 style={{textAlign: "center"}}>Please Register</h1>

            <form onSubmit={handleRegister}>
                <input type="text" name='name' id=''placeholder='Your Name' />
                <br />
                <input type="email" name='email' id='' placeholder='Email Address'/>
                <br />
                <input type="password" name='password' id='' placeholder='Password' />
                <input className='mt-3 me-2' type="checkbox" name="terms" id="terms" />
                <label htmlFor="terms">Accept Genius Car Terms and Conditions</label>
                <input className='btn btn-primary d-block mt-2' type="submit" value="Register" />
                <br />
            </form>
            <p>Already have an account? <Link to="/login" className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
            <SocialLogin />
        </div>
    );
};

export default Register;