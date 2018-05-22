// define action type
import { USER_LOGGED_IN } from "../types";
import api from "../api";

export const userLoggedIn = user => ({
  type: USER_LOGGED_IN,
  user
});

// define thunk action, a function that returns another function
export const login = credentials => dispatch =>
  api.user.login(credentials).then(user => dispatch(userLoggedIn(user)));
