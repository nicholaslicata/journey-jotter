import ListItem from '../components/ListItem';

function List({ list }) {

    return (
        <section className='list-container'>
             {list.map((item) => (
                <div>
                    <ListItem />
                </div>
            ))} 
        </section>
    )
}

export default List;