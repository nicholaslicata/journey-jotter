
function AddItemBtn({ setSubPage, setIsFilter }) {
    return (
        <div className='add-btn-container'>
            <button onClick={() => {setSubPage('addItemForm'); setIsFilter(false);}} className='add-item-btn'>Add Item</button>
        </div>
    )
}

export default AddItemBtn;