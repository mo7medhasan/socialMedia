import { createContext, useReducer } from "react";
import AuthReducer from "./AuthReducer";

const INITIAL_STATE = {
  user: {
    _id: "62470bcf3e61d2aa3c452030",
    userName: "odian",
    email: "odian@gmail.com",
    profilePicture: "person/2.jpeg",
    coverPicture: "person/noCover.png",
    followers: ["62460feb5fa1105d007247e5"],
    followings:[],  
    isAdmin: false,
    desc: "hey its my first post23",
    city: "cairo",
    from: "qena",
    relationship: 1,
  },

  isFetching: false,
  error: false,
};

export const AuthContext = createContext(INITIAL_STATE);

export const AuthContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AuthReducer, INITIAL_STATE);

  return (
    <AuthContext.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
};
