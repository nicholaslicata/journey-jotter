import ListItem from '../components/ListItem';

function List({ list, setSubPage, setCurrentItem, currentItem, setIsFilter, filterList }) {

    const notStarted = list.filter((item) => item.status === 'Not Started');
    const inProgress = list.filter((item) => item.status === 'In Progress');
    const completed = list.filter((item) => item.status == 'Completed');

    return (
        <section className='list-container'>
                {list.length > 0 && filterList === 'All' ? list.map((item) => (
                <ListItem item={item} setSubPage={setSubPage} setCurrentItem={setCurrentItem} currentItem={currentItem} setIsFilter={setIsFilter} key={item.id} />
            )) : notStarted.length > 0 && filterList === 'Not Started' ? notStarted.map((item) => (
                <ListItem item={item} setSubPage={setSubPage} setCurrentItem={setCurrentItem} currentItem={currentItem} setIsFilter={setIsFilter} key={item.id} />
            )) : inProgress.length > 0 && filterList === 'In Progress' ? inProgress.map((item) => (
                <ListItem item={item} setSubPage={setSubPage} setCurrentItem={setCurrentItem} currentItem={currentItem} setIsFilter={setIsFilter} key={item.id} />
            )) : completed.length > 0 && filterList === 'Completed' ? completed.map((item) => ( 
                <ListItem item={item} setSubPage={setSubPage} setCurrentItem={setCurrentItem} currentItem={currentItem} setIsFilter={setIsFilter} key={item.id} />
            )) : (<div className='empty-list-container'>
                <p className='empty-list-text1'>You have nothing to show</p>
                <p className='empty-list-text2'>Click the add button to jot a new item to your journey</p>
            </div>)} 
        </section>
    )
}

export default List;