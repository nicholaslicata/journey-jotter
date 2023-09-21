import { useState } from 'react';
import { doc, updateDoc } from 'firebase/firestore';
import { db } from '../firebase';

function EditItemForm({ currentItem, editedTitle, setEditedTitle, editedLocation, setEditedLocation, editedTargetDate, setEditedTargetDate, editedDescription, setEditedDescription, editedStatus, setEditedStatus, setSubPage }) {

    const [error, setError] = useState(false);
    const [errorMessage, setErrorMessage] = useState('');

    async function editItem(e) {
        e.preventDefault();
        if (editedTitle && editedLocation && editedTargetDate && editedDescription) {
          const listDoc = doc(db, 'list', currentItem.id)
          await updateDoc(listDoc, {
              title: editedTitle,
              location: editedLocation,
              targetDate: editedTargetDate,
              description: editedDescription,
              status: editedStatus,
          })
          setEditedTitle('');
          setEditedLocation('');
          setEditedTargetDate('');
          setEditedDescription('');
          setEditedStatus('');
          setSubPage('list');
          setError(false);
        } else if (!editedTitle || !editedLocation || !editedTargetDate || !editedDescription) {
          setError(true);
          setErrorMessage('Please fill out all text fields.')
        }
    }

    return (
        <form className='add-item-form'>
          {error && errorMessage ? <span className='register-error'>{errorMessage}</span> : null}
            <div className='add-item-input-container'>
              <label htmlFor='edit-item-title' className='add-item-label'>Title</label>
              <input onChange={(e) => {setEditedTitle(e.target.value)}} type='text' id='edit-item-title' className='add-item-input' placeholder={currentItem.title} autoComplete='off'/>
            </div>
            <div className='add-item-input-container'>
              <label htmlFor='edit-item-location' className='add-item-label'>Location</label>
              <input onChange={(e) => {setEditedLocation(e.target.value)}} type='text' id='edit-item-location' className='add-item-input' placeholder={currentItem.location} autoComplete='off' />
            </div>
            <div className='add-item-input-container'>
              <label htmlFor='edit-item-target-date' className='add-item-label'>Target Date</label>
              <input onChange={(e) => {setEditedTargetDate(e.target.value)}} type='text' id='edit-item-target-date' className='add-item-input' placeholder={currentItem.targetDate} onFocus={(e) => (e.target.type = 'date')} onBlur={(e) => (e.target.type = 'text')} />
            </div>
            <div className='add-item-input-container'>
              <label htmlFor='edit-item-description' className='add-item-label'>Description</label>
              <textarea onChange={(e) => {setEditedDescription(e.target.value)}} id='edit-item-description' className='add-item-description' placeholder={currentItem.description} autoComplete='off'></textarea>
            </div>
            <div className='add-item-input-container'>
              <label htmlFor='edit-item-status' className='add-item-label'>Status</label>
              <select onChange={(e) => {setEditedStatus(e.target.value)}} id='edit-item-status' className='add-item-status' defaultValue={currentItem.status} >
                <option>Not Started</option>
                <option>In Progress</option>
                <option>Completed</option>
              </select>
            </div>
            <button onClick={editItem} className='add-item-submit' type='submit'>Save Changes</button>
        </form>
    )
}

export default EditItemForm;