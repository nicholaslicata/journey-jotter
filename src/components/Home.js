import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { getDocs, collection, query, where, onSnapshot } from 'firebase/firestore';
import Nav from '../components/Nav';
import List from '../components/List';
import AddItemForm from '../components/AddItemForm';
import ItemDetails from '../components/ItemDetails';
import AddItemBtn from '../components/AddItemBtn';
import BackBtn from '../components/BackBtn';

function Home({ setPage, subPage, setSubPage, list, setList, userId }) {

    const listRef = collection(db, 'list');

    const [newTitle, setNewTitle] = useState('');
    const [newLocation, setNewLocation] = useState('');
    const [newTargetDate, setNewTargetDate]  = useState('');
    const [newDescription, setNewDescription] = useState('');
    const [newStatus, setNewStatus] = useState('');
    const [newCompletedDate, setNewCompletedDate] = useState('');
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
            {subPage === 'addItemForm' || subPage === 'itemDetails' ? <BackBtn setSubPage={setSubPage} /> : null}
            {subPage === 'list' && <List list={list} setSubPage={setSubPage} setCurrentItem={setCurrentItem} />}
            {subPage === 'addItemForm' && <AddItemForm listRef={listRef} setSubPage={setSubPage} newTitle={newTitle} setNewTitle={setNewTitle} newLocation={newLocation} setNewLocation={setNewLocation} newTargetDate={newTargetDate} setNewTargetDate={setNewTargetDate} newDescription={newDescription} setNewDescription={setNewDescription} newStatus={newStatus} setNewStatus={setNewStatus} newCompletedDate={newCompletedDate} setNewCompletedDate={setNewCompletedDate} userId={userId} />}
            {subPage === 'itemDetails' && <ItemDetails currentItem={currentItem} setSubPage={setSubPage} />}
        </main>
    )
}

export default Home;