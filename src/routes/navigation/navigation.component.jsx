import { Fragment } from "react";
import { Link , Outlet} from "react-router-dom";
import { ReactComponent as Crwnlogo } from '../../assets/crown.svg';
import './navigation.styles.scss'

const Navigation = () => {
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
          <Link className="nav-link" to={"/sign-in"}>
            SIGN IN
          </Link>
        </div>
      </div>
      <Outlet />
    </Fragment>
  );
};

export default Navigation;
