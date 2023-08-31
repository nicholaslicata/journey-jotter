import { addDoc } from 'firebase/firestore';

function addItemForm({ listRef, setSubPage, getList, newTitle, setNewTitle, newLocation, setNewLocation, newDate, setNewDate, newDescription, setNewDescription}) {

    async function addItem(e) {
        e.preventDefault();
        await addDoc(listRef, {
            title: newTitle,
            location: newLocation,
            date: newDate,
            description: newDescription,
        })
        getList();
        setSubPage('list');
    }
    
    return (
        <form className='add-item-form'>
            <input onChange={(e) => setNewTitle(e.target.value)} type='text' placeholder='What would you like to achieve?' />
            <input onChange={(e) => setNewLocation(e.target.value)} type='text' placeholder='Where does this take place?' />
            <input onChange={(e) => setNewDate(Number(e.target.value))} type='number' placeholder='When should this goal be completed by?' />
            <textarea onChange={(e) => setNewDescription(e.target.value)} placeholder="Give us a description of your achievment..."></textarea>
            <button onClick={addItem} type='submit'>Submit</button>
        </form>
    )
}

export default addItemForm;