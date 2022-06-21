import "./cart-dropdown.styles.scss";
import Button from "../button/button.component";
import CartItem from "../cart-item/cart-item.component";
import { CartContext } from "../../contexts/cart.context";
import { useContext  } from "react";
import { useNavigate } from "react-router-dom";

const CartDropdown = () => {

    const {cartItems} = useContext(CartContext);

    const navigate = useNavigate();

    const handleClick = () => {
        navigate('/checkout');
    }
    return(
        <div className="cart-dropdown-container">
        
        <div className="cart-items">
        { cartItems ? cartItems.map((item) => <CartItem key={item.id} cartItem={item}/> ) : null}
        </div>
        <Button onClick={handleClick}>Go To Checkout</Button>
        </div>)
}

export default CartDropdown;