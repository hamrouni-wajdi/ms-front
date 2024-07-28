import React, { useReducer, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onSignup, onLogin, onViewProfile } from "../store/actions";
import { AddressComponent } from "../components/Address-comp";
import { Profile } from "./Profile";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { BrowserRouter as Router, Route, Switch, Redirect,Navigate  } from 'react-router-dom';

//load Shopping profile
const Login = () => {
  const { user, profile } = useAppSelector((state) => state.userReducer);

  const dispatch = useAppDispatch();

  const { id, token } = user;

  const { address, whishlist, orders } = profile;

  const [isSignup, setSignup] = useState(false);

  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  useEffect(() => {
    if (token) {
      dispatch(onViewProfile());
    }
  }, [token]);

  const userSignup = () => {
    //call Signup
  };

  const userLogin = () => {
    dispatch(onLogin({ username, password }));
  };

  const loginForm = () => {
    return (
      <div
        className="row bg-secondary"
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          height: "30rem",
        }}
      >
        <div className="col col-sm-5 col-md-4 col-lg-3 col-xl-2">
          <form>
            <div className="from-group" controlId="formBasicEmail">
              <label>Username</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="from-group" controlId="formBasicPassword">
              <label>Password</label>
              <input
                className="form-control"
                type="password"
                placeholder="Password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>
            <div className="row m-2 float-right">
              <button
                className="btn btn-primary mr-2 "
                onClick={() => userLogin()}
                type="button"
              >
                Login
              </button>
              <button className="btn btn-primary" type="button" onClick={()=> <Navigate to="/signup" />
}>
                Signup
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };

  const signUpForm = () => {
    return (
      <div className="row">
        <h1> Signup </h1>
      </div>
    );
  };

  if (token) {
    return <Profile />;
  } else {
    return (
      <div className="container-fluid">
        {isSignup ? signUpForm() : loginForm()}
      </div>
    );
  }
};

export { Login };
