import classes from "./Header.module.css";
import { authAution } from "../store/authSlice";
import { useDispatch, useSelector } from "react-redux";

const Header = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);
  const dispatch = useDispatch();

  const logoutHandler = () => {
    dispatch(authAution.logout());
  };
  return (
    <header className={classes.header}>
      <h1>Redux Auth</h1>
      <nav>
        {isAuthenticated && (
          <ul>
            <li>
              <a href='/'>My Products</a>
            </li>
            <li>
              <a href='/'>My Sales</a>
            </li>
            <li>
              <button onClick={logoutHandler}>Logout</button>
            </li>
          </ul>
        )}
      </nav>
    </header>
  );
};

export default Header;
