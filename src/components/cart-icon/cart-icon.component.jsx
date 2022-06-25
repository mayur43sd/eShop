import { ReactComponent as ShopCartIcon } from "../../assets/shopping-bag.svg";
import "./cart-icon.styles.scss";
import { useDispatch ,useSelector } from "react-redux";
import { selectIsCartOpen ,selectCartCount } from "../../store/cart/cart.selector";
import { setIsCartOpen } from "../../store/cart/cart.actions";

const CartIcon = () => {

    const dispatch = useDispatch();
    const isCartOpen = useSelector(selectIsCartOpen);
    const cartCount = useSelector(selectCartCount);
    const toggleCart = () => {
        dispatch(setIsCartOpen(!isCartOpen));
    }


    return(<div className="cart-icon-container" onClick={toggleCart}>
        <ShopCartIcon className="shopping-icon"/>
        <span className="item-count">{cartCount}</span>
        
        </div>)
}

export default CartIcon