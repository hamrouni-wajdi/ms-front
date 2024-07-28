import { GetData, PostData } from "../../utils";
import { Action } from "../actions";
import { BrowserRouter as Router, Route, Switch, Redirect,Navigate  } from 'react-router-dom';

export const SetAuthToken = async (token) => {
  if (token) {
    localStorage.setItem("token", token);
  } else {
    localStorage.clear();
  }
};

export const onSignup =
  ({ email, password, firstname,lastname,username,address,phone }) =>
  async (dispatch) => {
    console.log("on signup ===========================")
    try {
      const response = await PostData("/db/register", {
        email,
        password,
        firstname,
        lastname,
        username,
        address,
        phone
      });
      const { token } = response.data;
      await SetAuthToken(token);
      return dispatch({ type: Action.SIGNUP, payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

export const onLogin =
  ({ username, password }) =>
  async (dispatch) => {
    try {
      const response = await PostData("/db/login", {
        username,
        password,
      });

      const { token } = response.data;
      await SetAuthToken(token);
      return dispatch({ type: Action.LOGIN, payload: response.data });
    } catch (err) {
      console.log(err);
    }
  };

export const onViewProfile = () => async (dispatch) => {
  try {
    const response = await GetData("/db/profile");

    return dispatch({ type: Action.PROFILE, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};

export const getProducts = () => async (dispatch) => {
  try {
    const response = await GetData("/db/products");

    return dispatch({ type: Action.PROFILE, payload: response.data });
  } catch (err) {
    console.log(err);
  }
};