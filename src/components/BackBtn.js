
function BackBtn({ setSubPage }) {
    return (
        <div className='back-btn-container'>
            <button onClick={() => setSubPage('list')} className='back-btn'>Go Back</button>
        </div>
    )
}

export default BackBtn;