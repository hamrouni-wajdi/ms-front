import React, { useReducer, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onSignup, onLogin, onViewProfile } from "../store/actions";
import { AddressComponent } from "../components/Address-comp";
import { Profile } from "./Profile";
import { useAppDispatch, useAppSelector } from "../store/hooks";

//load Shopping profile
const Signup = () => {
  const { user, profile } = useAppSelector((state) => state.userReducer);

  const dispatch = useAppDispatch();

  const { id, token } = user;

  const { whishlist, orders } = profile;

  const [isSignup, setSignup] = useState(false);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [firstname, setFirstname] = useState("");
  const [lastname, setLastname] = useState("");
  const [username, setUsername] = useState("");
  const [address, setAddress] = useState("");
  const [phone, setPhone] = useState("");




  useEffect(() => {
    if (token) {
      dispatch(onViewProfile());
    }
  }, [token]);

  const userSignup = () => {
    //call Signup
    console.log({ email, password,firstname, lastname,username,address,phone })
    dispatch(onSignup({ email, password,firstname, lastname,username,address,phone }));
  };

  const userLogin = () => {
    dispatch(onLogin({ email, password }));
  };

  const SignupForm = () => {
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
              <label>Firstname</label>
              <input
                className="form-control"
                type="string"
                placeholder="Enter your firstname"
                onChange={(e) => setFirstname(e.target.value)}
              />
            </div>
            <div className="from-group" controlId="formBasicEmail">
              <label>Lastname</label>
              <input
                className="form-control"
                type="text"
                placeholder="Enter your lastname"
                onChange={(e) => setLastname(e.target.value)}
              />
            </div>
            <div className="from-group" controlId="formBasicEmail">
              <label>username</label>
              <input
                className="form-control"
                type="string"
                placeholder="Enter your username"
                onChange={(e) => setUsername(e.target.value)}
              />
            </div>
            <div className="from-group" controlId="formBasicEmail">
              <label>Address</label>
              <input
                className="form-control"
                type="string"
                placeholder="Enter your address"
                onChange={(e) => setAddress(e.target.value)}
              />
            </div>
            <div className="from-group" controlId="formBasicEmail">
              <label>Phone</label>
              <input
                className="form-control"
                type="string"
                placeholder="Enter your phone number"
                onChange={(e) => setPhone(e.target.value)}
              />
            </div>
            <div className="from-group" controlId="formBasicEmail">
              <label>Email address</label>
              <input
                className="form-control"
                type="email"
                placeholder="Enter email"
                onChange={(e) => setEmail(e.target.value)}
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
              <button className="btn btn-primary" type="button"  onClick={() => userSignup()}>
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


    return (
      <div className="container-fluid">
      {  SignupForm() }
      </div>
    );
  
};

export { Signup };
