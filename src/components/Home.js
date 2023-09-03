import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { getDocs, collection } from 'firebase/firestore';
import Nav from '../components/Nav';
import List from '../components/List';
import AddItemForm from '../components/AddItemForm';
import ItemDetails from '../components/ItemDetails';
import AddItemBtn from '../components/AddItemBtn';
import BackBtn from '../components/BackBtn';

function Home({ setPage, subPage, setSubPage, list, setList }) {

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
        const response = await getDocs(listRef);
        const filteredResponse = response.docs.map((doc) => ({...doc.data(), id: doc.id,}))
        setList(filteredResponse);
    }

    return (
        <main className='home-page'>
            <Nav setPage={setPage} setSubPage={setSubPage} />
            {subPage === 'list' && <AddItemBtn setSubPage={setSubPage} />}
            {subPage === 'addItemForm' || subPage === 'itemDetails' ? <BackBtn setSubPage={setSubPage} /> : null}
            {subPage === 'list' && <List list={list} setSubPage={setSubPage} setCurrentItem={setCurrentItem} />}
            {subPage === 'addItemForm' && <AddItemForm listRef={listRef} setSubPage={setSubPage} getList={getList} newTitle={newTitle} setNewTitle={setNewTitle} newLocation={newLocation} setNewLocation={setNewLocation} newTargetDate={newTargetDate} setNewTargetDate={setNewTargetDate} newDescription={newDescription} setNewDescription={setNewDescription} newStatus={newStatus} setNewStatus={setNewStatus} newCompletedDate={newCompletedDate} setNewCompletedDate={setNewCompletedDate} />}
            {subPage === 'itemDetails' && <ItemDetails currentItem={currentItem} />}
        </main>
    )
}

export default Home;