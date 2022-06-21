import { Fragment , useContext } from "react";
import { Link , Outlet} from "react-router-dom";
import { ReactComponent as Crwnlogo } from '../../assets/crown.svg';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import './navigation.styles.scss'
import { UserContext } from "../../contexts/userContext/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";
import { CartContext } from "../../contexts/cart.context";
const Navigation = () => {

const { currentUser } = useContext(UserContext);
const {isCartOpen} = useContext(CartContext);

const handleClick = async() => {
  await signOutUser();
  
}
  return (
    <Fragment>
    <div className="navigation">
      <div className="logo-container">
        <Link className="nav-logo" to={"/"}>
         <Crwnlogo />
        </Link>
        </div>
        <div className="nav-links-container">
          <Link className="nav-link" to={"/shop"}>
            Shop
          </Link>
          <Link className="nav-link" to={"/checkout"}>
            Checkout
          </Link>
          {!currentUser ?<Link className="nav-link" to={"/auth"}>
            SIGN IN
          </Link> : <Link className="nav-link" to={"/auth"} onClick={handleClick}>
          SIGN OUT
        </Link> }
        <CartIcon />
        </div>
        {isCartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
