import { RiShoppingBasketLine } from 'react-icons/ri'

const Navbar = ({toggleAddItem, showAddItem}) => {
    return (
        <div className="navbar">
            <h2><RiShoppingBasketLine/></h2>
            <h1>My Basket</h1>
            <button className={showAddItem? 'btn del' : 'btn'} onClick={toggleAddItem}>{showAddItem? 'Close' : 'Add'}</button>
        </div>
        // style={{{showAddItem}? (color: 'red') : (color: 'green')}}
    )
}

export default Navbar
