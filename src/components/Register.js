
function Register({ page, setPage}) {
    return (
        <main className='register-page'>
            <form className='register-container'>
                <h1 className='login-title'>Journey Jotter</h1>
                <div className='register-btn-container'>
                    <button type='button' className='select-register-btn'>Register</button>
                    <button onClick={() => setPage('login')} type='button' className='select-login-btn'>Log In</button>
                </div>
                <div className='email-input-container'>
                    <label htmlFor='login-email' className='login-label'>Email</label>
                    <input type='email' name='login-email' className='login-email-input' placeholder='Type your email' />
                </div>
                <div className='password-input-container'>
                    <label htmlFor='login-password' className='login-label'>Password</label>
                    <input type='password' name='login-password' className='login-password-input' placeholder='Type your password' />
                </div>
                <button className='user-register-btn'>Register</button>
            </form>
        </main>
    )
}

export default Register;