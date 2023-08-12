import { useState } from 'react';
import { auth } from '../firebase';
import { createUserWithEmailAndPassword } from 'firebase/auth';

function Register({ page, setPage }) {

    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');

    async function registerUser(e) {
        e.preventDefault();
        try {
            const response = await createUserWithEmailAndPassword(auth, email, password);
            const user = response.user;
            setPage('home');
            console.log(user);
        }
        catch(err){
            console.log(err.message);
        }
    }

    return (
        <main className='register-page'>
            <form onSubmit={registerUser} className='register-container'>
                <h1 className='login-title'>Journey Jotter</h1>
                <div className='register-btn-container'>
                    <button type='button' className='select-register-active'>Register</button>
                    <button onClick={() => setPage('login')} type='button' className='select-login-btn'>Log In</button>
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