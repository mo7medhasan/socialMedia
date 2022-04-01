import "./register.css";

export default function Register() {
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
              <input type="text" placeholder="UserName" className="loginInput" />
              <input type="email" placeholder="Email" className="loginInput" />
              <input type="password" placeholder="Password" className="loginInput" />
              <input type="password" placeholder="Password Again" className="loginInput" />
              
              
              <button className="loginButton">Sign Up</button>
              <button className="loginRegisterButton">Log into Account</button>
            </div>
          </div>
      </div>
    </div>
  );
}