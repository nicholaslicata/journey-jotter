import { BiChevronRight } from 'react-icons/bi';

function ListItem({ item, setSubPage, setCurrentItem, setIsFilter }) {

    function handleItemClick() {
        setSubPage('itemDetails');
        setCurrentItem(item);
        setIsFilter(false);
    }

    return (
        <div onClick={handleItemClick} className='list-item-container'>
            <p className='list-item-title'>{item.title}</p>
            <BiChevronRight className='list-item-arrow' />
        </div>
    )
}

export default ListItem;