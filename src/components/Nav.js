import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

function Nav({ setPage }) {
    
    async function logOutUser() {
        await signOut(auth);
        setPage('login');
    }

    return (
        <nav className='nav'>
            <h1 className='logo'>Journey Jotter</h1>
            <div className='greeting-container'>
                <p className='greeting'>Welcome {auth.currentUser.displayName ? auth.currentUser.displayName : 'Guest'}!</p>
                <button onClick={logOutUser} className='logout-button'>Log out</button>
            </div>
        </nav>
    )
}

export default Nav;