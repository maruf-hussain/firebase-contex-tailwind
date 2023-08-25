import React, { useContext } from 'react';
import './Login.css'
import { Link } from 'react-router-dom';
import { AuthContext } from '../../Providers/AuthProviders';

const Login = () => {
    const { user, signIn } = useContext(AuthContext);
    console.log(signIn);

    const handleSubmitLogin = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;

        const password = form.password.value;
        console.log(email, password);


        signIn(email, password)
            .then(result => {
                const loggedUser = result.user;
                console.log(loggedUser);
                form.reset('');
            })
            .catch(error => {
                console.log(error);
            })
    }
    return (
        <div className='container'>
            <form onSubmit={handleSubmitLogin} className='form-container'>
                <input className='email-container' type="email" name="email" id="email" placeholder='Your Email' required /><br />
                <input className='password-container' type="password" name="password" id="password" placeholder='Your Password' required /><br />
                <input type="submit" value="Login" />
            </form>
            <Link to="/register">You Are New Please Register</Link>
        </div>
    );
};

export default Login;