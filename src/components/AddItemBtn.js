
function AddItemBtn({ setSubPage }) {
    return (
        <div className='add-btn-container'>
            <button onClick={() => setSubPage('addItemForm')} className='add-item-btn'>Add Item</button>
        </div>
    )
}

export default AddItemBtn;