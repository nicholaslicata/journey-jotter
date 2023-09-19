import { BiChevronRight } from 'react-icons/bi';

function ListItem({ item, setSubPage, setCurrentItem, currentItem }) {

    function handleItemClick() {
        setSubPage('itemDetails');
        setCurrentItem(item);
        console.log(currentItem);
    }

    return (
        <div onClick={handleItemClick} className='list-item-container'>
            <p className='list-item-title'>{item.title}</p>
            <BiChevronRight className='list-item-arrow' />
        </div>
    )
}

export default ListItem;