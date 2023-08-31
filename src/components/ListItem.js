import { BiChevronRight } from 'react-icons/bi';

function ListItem({ item, setSubPage, setCurrentItem }) {

    function handleItemClick() {
        setSubPage('itemDetails');
        setCurrentItem(item);
    }

    return (
        <div onClick={handleItemClick} className='list-item-container'>
            <p className='list-item-title'>{item.title}</p>
            <BiChevronRight className='list-item-arrow' />
        </div>
    )
}

export default ListItem;