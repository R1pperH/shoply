import { createContext } from "react";

const AuthContext = createContext({
  isLoggedIn: false,
  isAdmin: false,
  userId: null,
  token: null,
  login: () => {},
  logout: () => {},
  cart: () => {},
});

export default AuthContext;
