import { ReactComponent as ShopCartIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { CartContext } from "../../contexts/cart.context";
import { useContext } from "react";
const CartIcon = () => {

    const {isCartOpen , setIsCartOpen , cartItems} = useContext(CartContext);
    const toggleCart = () => {
        setIsCartOpen(!isCartOpen)
    }

    const count = cartItems.reduce((sum ,item)=> sum = sum + item.quantity , 0)

    return(<div className="cart-icon-container" onClick={toggleCart}>
        <ShopCartIcon className="shopping-icon"/>
        <span className="item-count">{count}</span>
        
        </div>)
}

export default CartIcon