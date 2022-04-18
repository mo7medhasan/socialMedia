import "./register.css";
import { useRef } from 'react';
import axios from 'axios';
import {useNavigate} from 'react-router-dom';
export default function Register() {
  const userName = useRef();
  const email = useRef();
  const password = useRef();
  const passwordAgain = useRef();
  const navigate = useNavigate();

  const handleClick = async (e) => {
    e.preventDefault();
   if(passwordAgain.current.value !== password.current.value)
   {
     password.current.setCustomValidity("Passwords don't match! ")
   }else{
     const user ={
      userName:userName.current.value,
      email:email.current.value,
      password :password.current.value,

     }
     try {
       await axios.post("/auth/register", user);
       navigate('/login');
     } catch (err) {
       console.log(err)
     }
   }

  };
  const handleClickToNavigate = async()=>{
    navigate('/login');
  }

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
          <div className="loginRight">  <div className="loginBox">
            <form className="loginBox" onSubmit={handleClick}>
              <input  required type="text" placeholder="UserName" ref={userName} className="loginInput" />
              <input  required type="email" placeholder="Email" ref={email} className="loginInput" />
              <input  required type="password" placeholder="Password" ref={password} className="loginInput" />
              <input  required type="password" placeholder="Password Again" ref={passwordAgain} className="loginInput" />
              
              
              <button className="loginButton" type="submit">Sign Up</button>
              
            </form>
          
              <button className="loginRegisterButton" onClick={handleClickToNavigate}>Log into Account</button>
            </div>
          </div>
      </div>
    </div>
  );
}
