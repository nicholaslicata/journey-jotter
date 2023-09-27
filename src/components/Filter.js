
function Filter({ isFilter, setIsFilter, setFilterList }) {
    return (
        <div className='filter-container'>
            <button onClick={() => setIsFilter(!isFilter)} className='filter-btn'>Filter By</button>
            {isFilter === true ? <div className='filter-dropdown-container'>
                <div onClick={() => {setFilterList('All'); setIsFilter(false);}} className='filter-item'>
                    All
                </div>
                <div onClick={() => {setFilterList('Not Started'); setIsFilter(false);}} className='filter-item'>
                    Not Started
                </div>
                <div onClick={() => {setFilterList('In Progress'); setIsFilter(false);}} className='filter-item'>
                    In Progress
                </div>
                <div onClick={() => {setFilterList('Completed'); setIsFilter(false);}} className='filter-item'>
                    Completed
                </div>
            </div> : null}
        </div>
    )
}

export default Filter;