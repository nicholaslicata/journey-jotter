
function EditItemBtn({ setSubPage }) {
    return (
        <button className='edit-btn' onClick={() => setSubPage('editItemForm')}>Edit</button>
    )
}

export default EditItemBtn;