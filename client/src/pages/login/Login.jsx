import "./login.css";

export default function Login() {
  return (
    <div className="login">
      <div className="loginWrapper">
          <div className="loginLeft">
          <h4 className="loginLogo">
          Odian
          </h4>
          <span className="loginDesc">
            connect with friends and the world around you on Mo7medSocial
          </span>
          </div>
          <div className="loginRight">
            <div className="loginBox">
              <input type="email" placeholder="Email" className="loginInput" />
              <input type="password" placeholder="Password" className="loginInput" />
              <button className="loginButton">Log In</button>
              <span className="loginForgot">Forgot Password?</span>
              <button className="loginRegisterButton">Create a New Account</button>
            </div>
          </div>
      </div>
    </div>
  );
}
