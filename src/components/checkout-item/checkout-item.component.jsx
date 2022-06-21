import { useContext } from "react";
import { CartContext } from "../../contexts/cart.context";
import "./checkout-item.styles.scss"

const CheckoutItem = ({item}) => {

    const {addItemToCart , removeItemFromCart ,deleteItemFromCart} = useContext(CartContext);
    const {name,price,quantity,imageUrl} = item;
    const addItemHandler = () => addItemToCart(item)
    const removeItemHandler = () => removeItemFromCart(item)
    const deleteItemHandler = () => deleteItemFromCart(item)

    return(<div className="checkout-item-container">
          <div className="image-container">
          <img src={imageUrl} alt={`${name}`}/>
          </div> 
        
        <span className="name">{name}</span>
        <div className="quantity">
        <span className="arrow" onClick={removeItemHandler }>&lt;</span>
        <span className="value">{quantity}</span>
        <span className="arrow" onClick={addItemHandler }>&gt;</span>
        </div>
        <span className="price"> x  ${price}</span>
        <span className="remove-button" onClick={deleteItemHandler }>&#10005;</span>
        

        </div>)
}

export default CheckoutItem;