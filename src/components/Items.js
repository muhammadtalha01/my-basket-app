import Item from './Item'
const Items = ({basketItems, addQuantity, decQuantity, deleteItem}) => {
    return (
        <div>
            {basketItems.map((item) => (<Item key={item.id} item={item} addQuantity={addQuantity} decQuantity={decQuantity} deleteItem={deleteItem}/>))}
        </div>
    )
}

export default Items
