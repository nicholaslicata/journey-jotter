import { useState } from 'react';
import { auth } from '../firebase'
import { signInAnonymously, signInWithEmailAndPassword } from 'firebase/auth';

function Login({ page, setPage, error, setError, errorMessage, setErrorMessage }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function logInUser(e) {
        e.preventDefault();
        try {
            if (email && password) {
            const response = await signInWithEmailAndPassword(auth, email, password);
            const user = response.user;
            setPage('home');
            setError(false);
            console.log(user);
            } else if (!email || !password) {
                setError(true);
                setErrorMessage('Please fill out all text fields.');
            }
        }
        catch(err) {
           if (err.code === 'auth/wrong-password') {
            setError(true);
            setErrorMessage('Password is incorrect.')
           } else if (err.code === 'auth/user-not-found') {
            setError(true);
            setErrorMessage('Email address not found.')
           }
        }
    }

    async function logInGuest(e) {
        e.preventDefault();
        try {
            await signInAnonymously(auth);
            setPage('home');
        }
        catch(err) {
            console.log(err.message);
        }
    }

    return (
        <main className='login-page'>
            <form className='login-container' noValidate>
                <h1 className='login-title'>Journey Jotter</h1>
                {error && errorMessage ? <span className='login-error'>{errorMessage}</span> : null}
                <div className='login-btn-container'>
                    <button onClick={() => {setPage('register'); setError(false);}} type='button' className='select-register-btn'>Register</button>
                    <button type='button' className='select-login-active'>Log In</button>
                </div>
                <div className='email-input-container'>
                    <label htmlFor='login-email' className='login-label'>Email</label>
                    <input onChange={(e) => setEmail(e.target.value)} type='email' name='login-email' className='login-email-input' placeholder='Type your email' autoComplete="off" minLength='6' required />
                </div>
                <div className='password-input-container'>
                    <label htmlFor='login-password' className='login-label'>Password</label>
                    <input onChange={(e) => setPassword(e.target.value)} type='password' name='login-password' className='login-password-input' placeholder='Type your password' autoComplete="off" minLength='6' required />
                </div>
                <button type='submit' onClick={logInUser} className='user-login-btn'>Log In To Account</button>
                <button type='submit' onClick={logInGuest} className='guest-login-btn'>Continue As Guest</button>
            </form>
        </main>
    )
}

export default Login;