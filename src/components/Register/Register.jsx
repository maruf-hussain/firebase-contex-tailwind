import React, { useContext } from 'react';
import './Register.css'
import { AuthContext } from '../../Providers/AuthProviders';

const Register = () => {
    const { user, createUser } = useContext(AuthContext);
    console.log(createUser);

    const handleSubmitRegister = (event) => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const name = form.name.value;
        const password = form.password.value;
        console.log(name, email, password);

        createUser(email, password)
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
            <form onSubmit={handleSubmitRegister} className='form-container'>
                {/* <input className='name' type="name" name="name" id="name" placeholder='Name' required /><br /> */}
                <input className='email-container' type="email" name="email" id="email" placeholder='Your Email' required /><br />
                <input className='password-container' type="password" name="password" id="password" placeholder='Your Password' required />  <br />
                <input type="submit" value="Register" />
            </form>
        </div>
    );
};

export default Register;