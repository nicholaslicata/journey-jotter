import { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Register({ page, setPage, error, setError, errorMessage, setErrorMessage }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function registerUser(e) {
        e.preventDefault();
        try {
            if (email && password) {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const user = response.user;
            setPage('home');
            setError(false);
            console.log(user);
            } else if (!email || !password) {
            setError(true);
            setErrorMessage('Please fill out all text fields.');
            }
        }
        catch(err){
            if (err.code === 'auth/weak-password') {
                setError(true);
                setErrorMessage('Password must be at least 6 characters.');
            } else if (err.code === 'auth/invalid-email') {
                setError(true);
                setErrorMessage('Please provide a valid email address.');
            } else if (err.code === 'auth/email-already-in-use') {
                setError(true);
                setErrorMessage('Email address is already in use.')
            }
        }
    }

    return (
        <main className='register-page'>
            <form onSubmit={registerUser} className='register-container'>
                <h1 className='login-title'>Journey Jotter</h1>
                {error && errorMessage ? <span className='register-error'>{errorMessage}</span> : null}
                <div className='register-btn-container'>
                    <button type='button' className='select-register-active'>Register</button>
                    <button onClick={() => {setPage('login'); setError(false);}} type='button' className='select-login-btn'>Log In</button>
                </div>
                <div className='email-input-container'>
                    <label htmlFor='login-email' className='login-label'>Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type='email' name='login-email' className='login-email-input' placeholder='Type your email' autoComplete='off' />
                </div>
                <div className='password-input-container'>
                    <label htmlFor='login-password' className='login-label'>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type='password' name='login-password' className='login-password-input' placeholder='Type your password' autoComplete='off' />
                </div>
                <button type='submit' onClick={registerUser} className='user-register-btn'>Register</button>
            </form>
        </main>
    )
}

export default Register;