
const Total = ({items}) => {
    const priceOfItem = items.map((item) => item.price)
    const quantityOfItem = items.map((item) => item.quantity)
    let totalCost = 0
    const findTotal = () =>{
        for(let i = 0; i < priceOfItem.length; i++){
            totalCost = totalCost + (priceOfItem[i] * quantityOfItem[i])
        }
        return totalCost
    }
    
    return (
        <div className="total">
            <p>Total</p>
            <p>{`$${findTotal()}.00`}</p>            
        </div>
    )
}

export default Total
