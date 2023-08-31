import ListItem from '../components/ListItem';

function List({ list, setSubPage, setCurrentItem }) {

    return (
        <section className='list-container'>
             {list.map((item) => (
                    <ListItem item={item} setSubPage={setSubPage} setCurrentItem={setCurrentItem} />
            ))} 
        </section>
    )
}

export default List;