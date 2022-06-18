import { Fragment , useContext } from "react";
import { Link , Outlet} from "react-router-dom";
import { ReactComponent as Crwnlogo } from '../../assets/crown.svg';
import './navigation.styles.scss'
import { UserContext } from "../../contexts/userContext/user.context";
import { signOutUser } from "../../utils/firebase/firebase.utils";

const Navigation = () => {

const { currentUser } = useContext(UserContext);


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
          {!currentUser ?<Link className="nav-link" to={"/auth"}>
            SIGN IN
          </Link> : <Link className="nav-link" to={"/auth"} onClick={handleClick}>
          SIGN OUT
        </Link> }
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
