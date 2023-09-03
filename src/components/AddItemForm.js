import { addDoc } from 'firebase/firestore';

function addItemForm({ listRef, setSubPage, getList, newTitle, setNewTitle, newLocation, setNewLocation, newTargetDate, setNewTargetDate, newDescription, setNewDescription, newStatus, setNewStatus, newCompletedDate, setNewCompletedDate }) {

    async function addItem(e) {
        e.preventDefault();
        await addDoc(listRef, {
            title: newTitle,
            location: newLocation,
            targetDate: newTargetDate,
            description: newDescription,
            status: newStatus,
            completedDate: newCompletedDate,
        })
        getList();
        setSubPage('list');
    }
    
    return (
        <form className='add-item-form'>
            <div className='add-item-input-container'>
              <label htmlFor='add-item-title' className='add-item-label'>Title</label>
              <input onChange={(e) => setNewTitle(e.target.value)} type='text' id='add-item-title' className='add-item-input' placeholder='What would you like to achieve?' autoComplete='off'/>
            </div>
            <div className='add-item-input-container'>
              <label htmlFor='add-item-location' className='add-item-label'>Location</label>
              <input onChange={(e) => setNewLocation(e.target.value)} type='text' id='add-item-location' className='add-item-input' placeholder='Where does this take place?' autoComplete='off' />
            </div>
            <div className='add-item-input-container'>
              <label htmlFor='add-item-target-date' className='add-item-label'>Target Date</label>
              <input onChange={(e) => setNewTargetDate(e.target.value)} type='date' id='add-item-target-date' className='add-item-input' placeholder='When should this goal be completed by?' />
            </div>
            <div className='add-item-input-container'>
              <label htmlFor='add-item-description' className='add-item-label'>Description</label>
              <textarea onChange={(e) => setNewDescription(e.target.value)} id='add-item-description' className='add-item-description' placeholder="A brief description about your achievement" autoComplete='off'></textarea>
            </div>
            <div className='add-item-input-container'>
              <label htmlFor='add-item-status' className='add-item-label'>Status</label>
              <select onChange={(e) => setNewStatus(e.target.value)} id='add-item-status' className='add-item-status'>
                <option>Not Started</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </div>
            <div className='add-item-input-container'>
              <label htmlFor='add-item-completed-date' className='add-item-label'>Completed Date</label>
              <input onChange={(e) => setNewCompletedDate(e.target.value)} type='date' id='add-item-completed-date' className='add-item-input'></input>
            </div>
            <button onClick={addItem} className='add-item-submit' type='submit'>Submit</button>
        </form>
    )
}

export default addItemForm;