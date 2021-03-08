import { useState } from 'react'
const Subtext = ({items, emptyBasket}) => {
    const itemCount = items.length
    return (
        <div className="subtext-display">
            <p>{itemCount} items in the Basket</p>
            <button className="btn del" onClick={emptyBasket}>Empty Basket</button>
        </div>
    )
}

export default Subtext
