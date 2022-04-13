import React from 'react';
import { Link, useNavigate } from 'react-router-dom';
import './Register.css'

const Register = () => {
    const navigate = useNavigate()

    const navigateLogin = () => {
        navigate("/login")
    }

    const handleRegister = (event) => {
        event.preventDefault();
        const name = event.target.name.value;
        const email = event.target.email.value;

        // console.log(event.target.email);
    }

    return (
        <div className='register-form'>
            <h1 style={{textAlign: "center"}}>Please Register</h1>

            <form onSubmit={handleRegister}>
                <input type="text" name='name' id=''placeholder='Your Name' />
                <br />
                <input type="email" name='email' id='' placeholder='Email Address'/>
                <br />
                <input type="password" name='password' id='' placeholder='Password' />
                <input type="submit" value="Register" />
                <br />
            </form>
            <p>Already have an account? <Link to="/login" className='text-danger text-decoration-none' onClick={navigateLogin}>Please Login</Link></p>
        </div>
    );
};

export default Register;