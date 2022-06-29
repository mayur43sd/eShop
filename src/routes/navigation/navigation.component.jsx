import { Fragment } from "react";
import { Link , Outlet} from "react-router-dom";
import { ReactComponent as Crwnlogo } from '../../assets/crown.svg';
import CartIcon from "../../components/cart-icon/cart-icon.component";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown.component";
import './navigation.styles.scss'
import { selectIsCartOpen } from "../../store/cart/cart.selector";
import { useSelector} from 'react-redux';
import { getCurrentUser } from "../../store/user/user.selector";
import { useDispatch } from "react-redux";
import { signOutStart } from "../../store/user/user.actions";


const Navigation = () => {

  const currentUser = useSelector(getCurrentUser);
  const iscartOpen = useSelector(selectIsCartOpen);
  const dispatch = useDispatch();

const handleClick = () => {
  dispatch(signOutStart())
  
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
          {!currentUser ?<Link className="nav-link" to={"/auth"} >
            SIGN IN
          </Link> : <Link className="nav-link" to={"/auth"} onClick={handleClick}>
          SIGN OUT
        </Link> }
        <CartIcon />
        </div>
        {iscartOpen && <CartDropdown />}
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
