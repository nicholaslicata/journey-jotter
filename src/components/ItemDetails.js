import DeleteItemBtn from '../components/DeleteItemBtn';
import EditItemBtn from '../components/EditItemBtn';

function ItemDetails({ currentItem, setSubPage }) {
    return (
        <section className='item-details-page-container'>
          <div className='item-details-container'>
            <div className='item-details-btn-container'>
              <DeleteItemBtn currentItem={currentItem} setSubPage={setSubPage} />
              <EditItemBtn setSubPage={setSubPage} />
            </div>
            <div className='item-details-text-container'>
                <ul className='item-detail'>
                    <li className='item-detail-heading'>Goal</li>
                    <li className='item-detail-text'>{currentItem.title}</li>
                </ul>
                <ul className='item-detail'>
                    <li className='item-detail-heading'>Location</li>
                    <li className='item-detail-text'>{currentItem.location}</li>
                </ul>
                <ul className='item-detail'>
                    <li className='item-detail-heading'>Target Date</li>
                    <li className='item-detail-text'>{currentItem.targetDate}</li>
                </ul>
                <ul className='item-detail'>
                    <li className='item-detail-heading'>Description</li>
                    <li className='item-detail-text'>{currentItem.description}</li>
                </ul>
                <ul className='item-detail'>
                    <li className='item-detail-heading'>Status</li>
                    <li className='item-detail-text'>{currentItem.status}</li>
                </ul>
            </div>
          </div>
        </section>
    )
}

export default ItemDetails;