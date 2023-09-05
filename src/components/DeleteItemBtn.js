import { doc, deleteDoc } from 'firebase/firestore';
import { db } from '../firebase';

function DeleteItemBtn({ currentItem, setSubPage }) {

    async function deleteItem() {
        await deleteDoc(doc(db, 'list', currentItem.id));
        setSubPage('list');
    }

    return (
        <button onClick={deleteItem}>Delete</button>
    )
}

export default DeleteItemBtn;