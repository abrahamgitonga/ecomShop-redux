import React, { useState, useEffect } from "react";
import "./styles.css";
import { Table } from "reactstrap";
import { useParams, useNavigate } from "react-router-dom";
import { useSelector, useDispatch } from "react-redux";
import {FaTrash} from 'react-icons/fa';
import {DLT} from '../redux/actions/Action';


function CardDetails() {
  const navigate = useNavigate();
  const [cartItem, setCartItem] = useState([]);
  const { id } = useParams();
  const getData = useSelector((state) => state.cartReducer.carts);

  const dispatch = useDispatch();
  const compare = () => {
    let compareData = getData.filter((item) => {
      return item.id === id;
    });
    console.log(compareData);

    setCartItem(compareData);
  };

  useEffect(() => {
    compare();
  }, [id]);

  const dlt = (id)=> {
    dispatch(DLT(id));
    navigate('/');
  }

  return (
    <>
      <h3 className="text-center m-5 p-2">Items Details Page</h3>
      <div className="container mx-auto main-detail">
   
                {
            cartItem.map((cart)=>{
              return( 
                <>
             
          <img
            src={cart.imgdata}
            width="300"
          alt=""/>
    
        <Table>
           <thead>
                <tr>
                  <th>Restaurant: {cart.rname} </th>
                </tr>
                <tr>
                  <th>Price: ksh{cart.price}</th>
                  <th>Rating:{cart.rating} </th>
                </tr>
                <tr>
                  <th>Dishes: {cart.address} </th>
    
                  <th>Order Review : {cart.somedata}</th>
                </tr>
    
                <tr>
                  <th>Total: <h5>{(cart.price * cart.qnty)}</h5></th>
                  <th><FaTrash className="trash" onClick={()=>dlt(cart.id)}/> </th>
                </tr>
                <tr>Quantity</tr>
              </thead>
       
         
        </Table>
        </>
        )
      })
          }
      </div>
    </>
  );
}

export default CardDetails;
