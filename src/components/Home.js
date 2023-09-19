import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { getDocs, collection, query, where, onSnapshot } from 'firebase/firestore';
import Nav from '../components/Nav';
import List from '../components/List';
import AddItemForm from '../components/AddItemForm';
import ItemDetails from '../components/ItemDetails';
import AddItemBtn from '../components/AddItemBtn';
import BackBtn from '../components/BackBtn';
import EditItemForm from '../components/EditItemForm';

function Home({ setPage, subPage, setSubPage, list, setList, userId }) {

    const listRef = collection(db, 'list');

    const [newTitle, setNewTitle] = useState('');
    const [editedTitle, setEditedTitle] = useState('');
    const [newLocation, setNewLocation] = useState('');
    const [editedLocation, setEditedLocation] = useState('');
    const [newTargetDate, setNewTargetDate]  = useState('');
    const [editedTargetDate, setEditedTargetDate] = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [editedDescription, setEditedDescription] = useState();
    const [newStatus, setNewStatus] = useState('');
    const [editedStatus, setEditedStatus] = useState('')
    const [newCompletedDate, setNewCompletedDate] = useState('');
    const [editedCompletedDate, setEditedCompletedDate] = useState('')
    const [currentItem, setCurrentItem] = useState();

    useEffect(() => {
        getList();
    }, [])

    async function getList() {
        try {
        const listQuery = query(listRef, where('userId', '==', userId));
        onSnapshot(listQuery, (snapshot) => {
            let docs = [];
            snapshot.forEach((doc) => {
                const data = doc.data();
                const id = doc.id;

                docs.push({...data, id});
            })
            setList(docs);
        })
        }
        catch(err) {
            console.log(err.message);
        }
    }

    return (
        <main className='home-page'>
            <Nav setPage={setPage} setSubPage={setSubPage} />
            {subPage === 'list' && <AddItemBtn setSubPage={setSubPage} />}
            {subPage === 'addItemForm' || subPage === 'itemDetails' || subPage === 'editItemForm' ? <BackBtn subPage={subPage} setSubPage={setSubPage} /> : null}
            {subPage === 'list' && <List list={list} setSubPage={setSubPage} setCurrentItem={setCurrentItem} currentItem={currentItem} />}
            {subPage === 'addItemForm' && <AddItemForm listRef={listRef} setSubPage={setSubPage} newTitle={newTitle} setNewTitle={setNewTitle} newLocation={newLocation} setNewLocation={setNewLocation} newTargetDate={newTargetDate} setNewTargetDate={setNewTargetDate} newDescription={newDescription} setNewDescription={setNewDescription} newStatus={newStatus} setNewStatus={setNewStatus} newCompletedDate={newCompletedDate} setNewCompletedDate={setNewCompletedDate} userId={userId} />}
            {subPage === 'itemDetails' && <ItemDetails currentItem={currentItem} setSubPage={setSubPage} />}
            {subPage === 'editItemForm' && <EditItemForm currentItem={currentItem} editedTitle={editedTitle} setEditedTitle={setEditedTitle} editedLocation={editedLocation} setEditedLocation={setEditedLocation} editedTargetDate={editedTargetDate} setEditedTargetDate={setEditedTargetDate} editedDescription={editedDescription} setEditedDescription={setEditedDescription} editedStatus={editedStatus} setEditedStatus={setEditedStatus} editedCompletedDate={editedCompletedDate} setEditedCompletedDate={setEditedCompletedDate} setSubPage={setSubPage} />}
        </main>
    )
}

export default Home;