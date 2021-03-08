import Navbar from './components/Navbar'
import Subtext from './components/Subtext'
import Items from './components/Items'
import Total from './components/Total'
import AddItems from './components/AddItems'
import {useState, useEffect} from 'react'


function App() {

  //State for items to be added in to the basket, using localstorage
  const [items, setItems] = useState([])

  //Items added into the basket are moved to localStorage
  useEffect(() => {
    const sendBasket = () =>{
      const testInfo = localStorage.getItem('items-in-basket')
      const testData = JSON.parse(testInfo)
      if(testData){
        setItems(testData)
      }else if(!testData){
        localStorage.setItem('items-in-basket', JSON.stringify(items))
      }
    }
    sendBasket()
  }, [])

  useEffect(() => {
    localStorage.setItem('items-in-basket', JSON.stringify(items))
  },[items])

  //State for itemsStored that will be available to Add to Basket
  const [itemsStored, setItemsStored] = useState([
    {
    id: 1,
    name: 'Camera',
    price: 100.00,
    quantity: 0
    },
    {
      id: 2,
      name: 'Perfume Men',
      price: 50.00,
      quantity: 0
    },
    {
      id: 3,
      name: 'Perfume Women',
      price: 65.00,
      quantity: 0
    },
    {
      id: 4,
      name: 'Watch Men',
      price: 75.00,
      quantity: 0
    },
    {
      id: 5,
      name: 'Shoes Yellow',
      price: 85.00,
      quantity: 0
    },
    {
      id: 6,
      name: 'Shoes Black',
      price: 65.00,
      quantity: 0
    },
    {
      id: 7,
      name: 'Watch Classic',
      price: 200.00,
      quantity: 0
    },
    {
      id: 8,
      name: 'Cosmetic',
      price: 55.00,
      quantity: 0
    }
  ])

  //Stored items are moved to localstorage
  useEffect(() => {
    const sendData = () =>{
      for(let i = 0; i < itemsStored.length; i++){
        localStorage.setItem(itemsStored[i].name, JSON.stringify(itemsStored[i]))
      }
    }
    sendData()
  },[])

  //State to toggle AddItems Component
  const [showAddItem, setShowAddItem] = useState(false)

  //Function to toggle AddItems Component
  const toggleAddItem = () => {
    setShowAddItem(!showAddItem)
  }

  //Items Searched in localstorage and then Added to items state
  const addNewItem = (itemName) =>{
    let checkcount = 0
    for(let i=0; i < itemsStored.length; i++){
      if(itemName === itemsStored[i].name){
        const newData = localStorage.getItem(itemName)
        const newItem = JSON.parse(newData)
        setItems([...items, newItem])
      }else{
        checkcount += 1
      }
    }
    if(checkcount === itemsStored.length){
      alert('Sorry Product not found')
    } 
  }

  //Empty entire items state 
  const emptyBasket = () => {
    setItems([])
  }
  //Add quantity to the items in the basket
  const addQuantity = (id) => {
    setItems(items.map((item) => item.id === id ?
    {...item, quantity: item.quantity+=1} : item))
  }
  //Decreases quantity to the items in the basket
  const decQuantity = (id) => {
    setItems(items.map((item) => item.id === id ?
  {...item, quantity: (item.quantity > 0? item.quantity-=1 : 0)} : item))
  }
  //Deletes individual items in the basket
  const deleteItem = (id) =>{
    setItems(items.filter((item) => item.id !== id  ))
  }

  return (
    <div className="container">
      
      {/* Navbar Compnent */}
      <Navbar toggleAddItem={toggleAddItem} showAddItem={showAddItem}/>
      {showAddItem? <AddItems addNewItem={addNewItem}/> : '' }
      {/* Subtext with delete button */}
      <Subtext items={items} emptyBasket={emptyBasket}/>
      {/* Items Container */}      
      <Items basketItems={items} addQuantity={addQuantity} decQuantity={decQuantity} deleteItem={deleteItem}/>
      {/* Total to Display */}
      <Total items={items}/>
    </div>
  );
}

export default App;
