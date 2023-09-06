import ListItem from '../components/ListItem';

function List({ list, setSubPage, setCurrentItem }) {

    return (
        <section className='list-container'>
             {list.length > 0 ? list.map((item) => (
                    <ListItem item={item} setSubPage={setSubPage} setCurrentItem={setCurrentItem} />
            )) : (<div className='empty-list-container'>
                <p className='empty-list-text1'>You have nothing to show</p>
                <p className='empty-list-text2'>Click the add button to jot a new item to your journey</p>
            </div>)} 
        </section>
    )
}

export default List;