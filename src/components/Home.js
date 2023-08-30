import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { getDocs, collection } from 'firebase/firestore';
import Nav from '../components/Nav';
import List from '../components/List';
import AddItemForm from '../components/AddItemForm';
import ItemDetails from '../components/ItemDetails';

function Home({ setPage, subPage, setSubPage, list, setList }) {

    const listRef = collection(db, 'list');

    const [newTitle, setNewTitle] = useState('');
    const [newLocation, setNewLocation] = useState('');
    const [newDate, setNewDate]  = useState(0);
    const [newDescription, setNewDescription] = useState('');

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
            <Nav setPage={setPage} />
            <div className='add-btn-container'>
                <button onClick={() => setSubPage('addItemForm')} className='add-item-btn'>Add Item</button>
            </div>
            {subPage === 'list' && <List list={list} setSubPage={setSubPage} />}
            {subPage === 'addItemForm' && <AddItemForm listRef={listRef} setSubPage={setSubPage} getList={getList} />}
            {subPage === 'itemDetails' && <ItemDetails />}
        </main>
    )
}

export default Home;