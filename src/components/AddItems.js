import {useState} from 'react'

const AddItems = ({addNewItem}) => {
    const [product, setProduct] = useState('')
    
    //This function prevents the defualt redirect function of the form when the submit is clicked.
    const onSubmit= (e) =>{
        e.preventDefault()

        if(!product){
            alert('Please enter details')
            return
        }
        else{
            addNewItem(product)
            setProduct('')
        }
    }
    return (
        //(Come here to - 1)The function onSubmit is applied to the entire form  
        <form className='add-form' onSubmit={onSubmit}>
            <div className='form-control'>
                <label>Search For Product</label>
                <input type='text' placeholder='Search Item' value={product} onChange={(e) => setProduct(e.target.value)}/> 
                {/* It the same to wirte inputs this way or the other as below */}
            </div>
            {/*The submit input is applied on the entire form that redirects the page at defualt (Go up to - 1)*/}
            <input className='btn btn-block' type='submit' value='Add Item'/>
        </form>
    )
}

export default AddItems
