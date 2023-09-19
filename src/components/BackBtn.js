
function BackBtn({ subPage, setSubPage }) {
    return (
        <div className='back-btn-container'>
            <button onClick={() => {subPage === 'editItemForm' ? setSubPage('itemDetails') : setSubPage('list')}} className='back-btn'>Go Back</button>
        </div>
    )
}

export default BackBtn; 