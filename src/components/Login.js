
function Login({ page, setPage }) {
    return (
        <main className='login-page'>
            <form className='login-container'>
                <h1 className='login-title'>Journey Jotter</h1>
                <div className='login-btn-container'>
                    <button onClick={() => setPage('register')} type='button' className='select-register-btn'>Register</button>
                    <button type='button' className='select-login-btn'>Log In</button>
                </div>
                <div className='email-input-container'>
                    <label htmlFor='login-email' className='login-label'>Email</label>
                    <input type='email' name='login-email' className='login-email-input' placeholder='Type your email' />
                </div>
                <div className='password-input-container'>
                    <label htmlFor='login-password' className='login-label'>Password</label>
                    <input type='password' name='login-password' className='login-password-input' placeholder='Type your password' />
                </div>
                <button className='user-login-btn'>Log In</button>
                <button className='guest-login-btn'>Continue As Guest</button>
            </form>
        </main>
    )
}

export default Login;