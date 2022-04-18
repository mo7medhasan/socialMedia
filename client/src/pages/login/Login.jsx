
import { useContext, useRef } from "react";
import "./login.css";
import { loginCall } from "../../ApiCalls";
import { AuthContext } from "../../context/AuthContext";
import { CircularProgress } from "@material-ui/core";

export default function Login() {
  const email = useRef();
  const password = useRef();
  const {user, isFetching, dispatch } = useContext(AuthContext);

  const handleClick = (e) => {
    e.preventDefault();
    loginCall(
      { email: email.current.value, password: password.current.value },
      dispatch
    );
  };

    // console.log(user);

  return (
    <div className="login">
      <div className="loginWrapper">
        <div className="loginLeft">
          <h4 className="loginLogo">Odian</h4>
          <span className="loginDesc">
            connect with friends and the world around you on Mo7medSocial
          </span>
        </div>
        <div className="loginRight">
          <form className="loginBox" onSubmit={handleClick}>
            <input
              type="email"
              placeholder="Email"
              className="loginInput"
              ref={email}
              required
            />
            <input
              type="password"
              placeholder="Password"
              className="loginInput"
              ref={password}
              minLength="6"
              required
            />
            <button className="loginButton" type="submit" disabled={isFetching}>
              {isFetching ?( <CircularProgress color="white" size="20px"/>):("Log In")}</button>
            <span className="loginForgot">Forgot Password?</span>
            <button className="loginRegisterButton">
             
              {isFetching ?( <CircularProgress color="white" size="20px"/>):(" Create a New Account")}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}
