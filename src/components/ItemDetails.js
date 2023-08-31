
function ItemDetails({ currentItem }) {
    return (
        <div>
        <p>{currentItem.title}</p>
        <p>{currentItem.location}</p>
        <p>{currentItem.date}</p>
        <p>{currentItem.description}</p>
        </div>
    )
}

export default ItemDetails;