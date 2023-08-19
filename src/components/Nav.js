import { auth } from '../firebase';
import { signOut } from 'firebase/auth';

function Nav({ setPage }) {
    
    async function logOutUser() {
        await signOut(auth);
        setPage('login');
    }

    return (
        <nav className='nav'>
            <p>Welcome {auth.currentUser.displayName ? auth.currentUser.displayName : 'Guest'}!</p>
            <button onClick={logOutUser} className='logout-button'>Log out</button>
        </nav>
    )
}

export default Nav;