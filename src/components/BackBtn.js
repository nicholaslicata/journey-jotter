
function BackBtn({ subPage, setSubPage, setNewTitle, setNewLocation, setNewTargetDate, setNewDescription, setNewStatus, setEditedTitle, setEditedLocation, setEditedTargetDate, setEditedDescription, setEditedStatus }) {
    return (
        <div className='back-btn-container'>
            <button onClick={() => {subPage === 'editItemForm' ? setSubPage('itemDetails') : setSubPage('list'); setNewTitle(''); setNewLocation(''); setNewTargetDate(''); setNewDescription(''); setNewStatus(''); setEditedTitle(''); setEditedLocation(''); setEditedTargetDate(''); setEditedDescription(''); setEditedStatus('');}} className='back-btn'>Go Back</button>
        </div>
    )
}

export default BackBtn; 