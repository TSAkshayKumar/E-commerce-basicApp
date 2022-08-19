import React,{useState,useEffect} from "react";
import styles from "./Cart.module.css";
import { connect } from 'react-redux';

import CartItem from "./CartItem/CartItem";


const Cart = ({ cart }) => {
  const [totalCount, setTotalCount] =useState(0);
  const [totalPrice, setTotalPrice] =useState(0);

  useEffect(()=>{
   let count = 0;
   let totalprice =0;
   cart.map((cartItem)=>{
        count += cartItem.qty;
        totalprice += cartItem.qty * cartItem.price;
   })
    setTotalCount(count);
    setTotalPrice(totalprice);

  },[cart, totalCount, totalPrice])

  return (
    <div className={styles.cart}>
      <div className={styles.cart__items}>
      {
        cart.map((cartItem)=>(
          <CartItem key={cartItem.id} cartData={cartItem}/>
        ))
      } 
      </div>
      <div className={styles.cart__summary}>
        <h4 className={styles.summary__title}>Cart Summary</h4>
        <div className={styles.summary__price}>
          <span>TOTAL: ({totalCount})</span>
          <span>$ {totalPrice}</span>
        </div>
        <button className={styles.summary__checkoutBtn}>
          Proceed To Checkout
        </button>
      </div>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart :  state.shop.cart,
  }
}


export default connect(mapStateToProps)(Cart);
