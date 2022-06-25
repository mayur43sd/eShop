import "./product-card.styles.scss"
import Button from "../button/button.component"
import { useSelector , useDispatch } from "react-redux";
import { selectCartItems } from "../../store/cart/cart.selector";
import { addItemToCart } from "../../store/cart/cart.actions";

const ProductCard = ({product}) => {
    const dispatch = useDispatch();
    const {name,price,imageUrl} = product;
    const cartItems = useSelector(selectCartItems)

    const handleClick = () => dispatch(addItemToCart(cartItems ,product))
       
    
    
    
    return(<div className="product-card-container">
        <img src={imageUrl} alt={name}/>
        <div className="footer">
        <span>{name}</span>
        <span>{price}</span>
        </div>
        <Button onClick={handleClick}>Add to Cart</Button>
        </div>)
}

export default ProductCard