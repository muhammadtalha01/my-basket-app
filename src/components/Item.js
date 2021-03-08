import Image1 from '../images/pexels-alex-andrews-1203803.jpg'
import Image2 from '../images/pexels-fidel-hajj-2814832.jpg'
import Image3 from '../images/pexels-jess-bailey-designs-755992.jpg'
import Image4 from '../images/pexels-karolina-grabowska-4041157.jpg'
import Image5 from '../images/pexels-melvin-buezo-2529157.jpg'
import Image6 from '../images/pexels-ray-piedra-1478442.jpg'
import Image7 from '../images/pexels-rezoana-rayna-4443657.jpg'
import Image8 from '../images/pexels-valeriia-miller-3685523.jpg'
import {FaTimes} from 'react-icons/fa'
import Quantity from './Quantity'

const Item = ({item, addQuantity, decQuantity, deleteItem}) => {
    const imageNumber = () =>{
        if(item.id===1){
            return Image1
        }
        else if(item.id===2){
            return Image2
        } 
        else if(item.id===3){
            return Image3
        }
        else if(item.id===1){
            return Image1
        }
        else if(item.id===4){
            return Image4
        } 
        else if(item.id===5){
            return Image5
        } 
        else if(item.id===6){
            return Image6
        } 
        else if(item.id===7){
            return Image7
        } 
        else if(item.id===8){
            return Image8
        } 
    }
    return (
        <div className="item">
            <img src={imageNumber()}/>
            <div>
                <h4><FaTimes style={{cursor: 'pointer'}} onClick={() => deleteItem(item.id)}/> </h4>
                <div className="item-info">
                    <h3>{item.name}</h3>
                    <p>{`$${item.price}.00`}</p>
                </div>
                <Quantity item={item} addQuantity={addQuantity} decQuantity={decQuantity}/>
            </div>
            
        </div>
    )
}

export default Item
