import "./checkout-item.styles.scss"
import { useSelector , useDispatch } from "react-redux";
import { addItemToCart, removeItemFromCart , deleteItemFromCart } from "../../store/cart/cart.actions";
import { selectCartItems } from "../../store/cart/cart.selector";

const CheckoutItem = ({item}) => {

  const dispatch = useDispatch();
    const cartItems = useSelector(selectCartItems)
    const {name,price,quantity,imageUrl} = item;
    const addItemHandler = () => dispatch(addItemToCart(cartItems,item))
    const removeItemHandler = () => dispatch(removeItemFromCart(cartItems,item))
    const deleteItemHandler = () => dispatch(deleteItemFromCart(cartItems,item))

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