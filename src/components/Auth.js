import classes from "./Auth.module.css";
import { useDispatch, useSelector } from "react-redux";
import { authAution } from "../store/authSlice";

const Auth = () => {
  const { isAuthenticated } = useSelector((state) => state.auth);

  const dispatch = useDispatch();

  const loginHandler = (e) => {
    e.preventDefault();
    dispatch(authAution.login());
    console.log(isAuthenticated);
    // console.log(isAuthenticated);
  };
  return (
    <main className={classes.auth}>
      <section>
        {!isAuthenticated && (
          <>
            <form>
              <div className={classes.control}>
                <label htmlFor='email'>Email</label>
                <input type='email' id='email' />
              </div>
              <div className={classes.control}>
                <label htmlFor='password'>Password</label>
                <input type='password' id='password' />
              </div>
              <button onClick={loginHandler}> Login</button>
            </form>
          </>
        )}
      </section>
    </main>
  );
};

export default Auth;
