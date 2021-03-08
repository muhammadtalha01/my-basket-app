import { AiFillMinusCircle } from 'react-icons/ai'
import { AiFillPlusCircle } from 'react-icons/ai'

const Quantity = ({item, addQuantity, decQuantity}) => {

    return (
        <div className="quantity-container">
            <h3><AiFillMinusCircle onClick={() => decQuantity(item.id)}/></h3>
            <h3>{item.quantity}</h3>
            <h3><AiFillPlusCircle onClick={() => addQuantity(item.id)}/></h3>
        </div>
    )
}

export default Quantity
