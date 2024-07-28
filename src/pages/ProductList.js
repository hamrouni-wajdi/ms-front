import React, { useReducer, useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { onSignup, onLogin, onViewProfile } from "../store/actions";
import { AddressComponent } from "../components/Address-comp";
import { Profile } from "./Profile";
import { useAppDispatch, useAppSelector } from "../store/hooks";
import { GetData, PostData } from "../utils/apicall";
import axios from "axios";
import { CartItem } from "../components/Cart-comp";
//load Shopping profile
const ProductList = () => {
  const { user, profile } = useAppSelector((state) => state.userReducer);

  const dispatch = useAppDispatch();

  const { id, token } = user;


  const [products, setProducts] = useState([]);

  useEffect(() => {
    axios.get("/db/products").then((response)=>{
    console.log(response)  
    setProducts(response.data)
    console.log(products)
  })
  }, []);


  const List = () => {
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
        <div style={{display: 'flex', flexDirection:"row", flexWrap: 'wrap', gap:"20px"}}>
          {products &&  products.map((item)=>{
            return (
              <div className="row mb-2 p-1 border rounded" style={{  flex: '0 1 calc(50% - 10px)'}}>
              <div className="col-2">
                  <img variant="top" style={{ width: '6rem'}} src={item.banner} />
              </div>
              <div className="col p-2">
                  <span className="font-weight-bold">{item.name}</span>
                  <p className="text-secondary" style={{ fontSize: '0.9rem'}}>{item.desc}</p>
                  <span>${item.price}</span>
              </div>
              <div className="col-3" style={{ display: 'flex', flexDirection: 'row', justifyContent: 'center', alignItems: 'center' }}>
                      <button className="btn bg-warning"
                          // onClick={() => removeCart()}
                      >
                          <i className="fas fa-minus"></i>
                      </button>
                      <span className="m-3" style={{ fontSize: '2.0rem'}}>{item.currentUnit}</span>
                      <button className="btn bg-warning"
                          // onClick={() => addCart()}
                      >
                          <i className="fas fa-plus"></i>
                      </button>
              </div>
          </div>
            )
          })}
        </div>
      </div>
    );
  };
    return (
      <div className="container-fluid">
        {List()}
      </div>
    );
};

export { ProductList };
