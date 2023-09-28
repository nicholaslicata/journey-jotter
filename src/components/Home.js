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
import Filter from '../components/Filter';

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
    const [editedStatus, setEditedStatus] = useState('');
    const [currentItem, setCurrentItem] = useState();
    const [isFilter, setIsFilter] = useState(false);
    const [filterList, setFilterList] = useState('All');

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
            {subPage === 'list' && <div className='list-btn-container'><p className='list-count'>You have {list.length} {list.length > 1 ? 'jots' : list.length === 0 ? 'jots' : 'jot'}</p><AddItemBtn setSubPage={setSubPage} setIsFilter={setIsFilter} /><Filter isFilter={isFilter} setIsFilter={setIsFilter} setFilterList={setFilterList} /></div>}
            {subPage === 'addItemForm' || subPage === 'itemDetails' || subPage === 'editItemForm' ? <BackBtn subPage={subPage} setSubPage={setSubPage} setNewTitle={setNewTitle} setNewLocation={setNewLocation} setNewTargetDate={setNewTargetDate} setNewDescription={setNewDescription} setNewStatus={setNewStatus} setEditedTitle={setEditedTitle} setEditedLocation={setEditedLocation} setEditedTargetDate={setEditedTargetDate} setEditedDescription={setEditedDescription} setEditedStatus={setEditedStatus} /> : null}
            {subPage === 'list' && <List list={list} setSubPage={setSubPage} setCurrentItem={setCurrentItem} currentItem={currentItem} setIsFilter={setIsFilter} filterList={filterList} />}
            {subPage === 'addItemForm' && <AddItemForm listRef={listRef} setSubPage={setSubPage} newTitle={newTitle} setNewTitle={setNewTitle} newLocation={newLocation} setNewLocation={setNewLocation} newTargetDate={newTargetDate} setNewTargetDate={setNewTargetDate} newDescription={newDescription} setNewDescription={setNewDescription} newStatus={newStatus} setNewStatus={setNewStatus} userId={userId} />}
            {subPage === 'itemDetails' && <ItemDetails currentItem={currentItem} setSubPage={setSubPage} />}
            {subPage === 'editItemForm' && <EditItemForm currentItem={currentItem} editedTitle={editedTitle} setEditedTitle={setEditedTitle} editedLocation={editedLocation} setEditedLocation={setEditedLocation} editedTargetDate={editedTargetDate} setEditedTargetDate={setEditedTargetDate} editedDescription={editedDescription} setEditedDescription={setEditedDescription} editedStatus={editedStatus} setEditedStatus={setEditedStatus} setSubPage={setSubPage} />}
        </main>
    )
}

export default Home;