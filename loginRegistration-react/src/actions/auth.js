// define action type
import { USER_LOGGED_IN, USER_LOGGED_OUT } from "../types";
import api from "../api";

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

export const userLoggedOut = () => ({
  type: USER_LOGGED_OUT
});

// define thunk action, a function that returns another function
// login calls user.login method from api.js and if everything goes well,
// dispatch userLoggedIn action to all reducers

// localStorage is used to save jsonwebtoken when refreshing web app
// without localStorage, refreshing the page will change logout button back to login
export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => {
    localStorage.loginRegistrationJWT = user.token;
    dispatch(userLoggedIn(user));
  });

export const logout = () => dispatch => {
  localStorage.removeItem("loginRegistrationJWT");
  dispatch(userLoggedOut());
};
