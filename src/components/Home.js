import { useState, useEffect } from 'react';
import { db } from '../firebase';
import { getDocs, collection } from 'firebase/firestore';
import Nav from '../components/Nav';
import List from '../components/List';

function Home({ setPage, list, setList }) {

    const listRef = collection(db, 'list');

    useEffect(() => {
        getList();
    }, [])

    async function getList() {
        const response = await getDocs(listRef);
        const filteredResponse = response.docs.map((doc) => ({...doc.data(), id: doc.id,}))
        setList(filteredResponse);
        console.log(filteredResponse);
    }

    return (
        <main className='home-page'>
            <Nav setPage={setPage} />
            <List list={list} />
        </main>
    )
}

export default Home;