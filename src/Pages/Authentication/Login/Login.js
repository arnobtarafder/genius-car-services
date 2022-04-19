import { async } from '@firebase/util';
import React, { useRef } from 'react';
import { Button, Form } from 'react-bootstrap';
import { useSendPasswordResetEmail, useSignInWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { Helmet } from 'react-helmet-async';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import { toast, ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import auth from '../../../firebase.init';
import BrowserTitle from '../../Shared/BrowserTitle/BrowserTitle';
import Loading from '../../Shared/Loading/Loading';
import SocialLogin from '../SocialLogin/SocialLogin';

const Login = () => {
    const emailRef = useRef("");
    const passwordRef = useRef("");
    const navigate = useNavigate();
    const location = useLocation();
    let from = location.state?.from?.pathname || "/";
    let errorElement;

    const [
        signInWithEmailAndPassword,
        user,
        loading,
        error,
    ] = useSignInWithEmailAndPassword(auth);

    const [sendPasswordResetEmail, sending] = useSendPasswordResetEmail(auth)

    if (loading || sending) {
        return <Loading />
    }

    if (user) {
        //   navigate("/");
        navigate(from, { replace: true });
    }

    if (error) {
        return (
            errorElement = <div>
                <p className="text-danger">Error: {error?.message}</p>
            </div>
        )
    }


    const handleSubmit = event => {
        event.preventDefault();
        const email = emailRef.current.value;
        const password = passwordRef.current.value;

        signInWithEmailAndPassword(email, password)
        // console.log(email, password);
    }

    const navigateRegister = () => {
        navigate("/register")
    }

    const resetPassword = async () => {
        const email = emailRef.current.value;

        if (email) {
            await sendPasswordResetEmail(email);
            toast("Sent email");
        }
        else {
            toast("Please enter your email address!!");
        }
    }

    return (
        <div className='container w-50 mx-auto mt-5'>
          <BrowserTitle title="Login"></BrowserTitle>
            <h1 className='text-center text-primary pt-5'>Please Login</h1>
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Control ref={emailRef} type="email" placeholder="Enter email" required />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicPassword">
                    <Form.Control ref={passwordRef} type="password" placeholder="Password" required />
                </Form.Group>
                <Button variant="primary w-50 d-block mx-auto mb-3" type="submit">
                    Login
                </Button>
            </Form>
            {errorElement}
            <p>New to Genius Car? <Link to="/register" className='text-primary text-decoration-none' onClick={navigateRegister}>Please Register</Link></p>

            <p>Forget Password? <button className='btn btn-link text-decoration-none' onClick={resetPassword}>Reset Password</button></p>
            <SocialLogin />
            <ToastContainer />
        </div>
    );
};

export default Login;