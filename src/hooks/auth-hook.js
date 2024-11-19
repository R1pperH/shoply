import { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  login: () => {},
  logout: () => {},
  cart: () => {},
});

export default AuthContext;
