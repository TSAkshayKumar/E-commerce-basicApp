import React from "react";
import { Link } from "react-router-dom";
import styles from "./Product.module.css";
import {add_To_Cart, lood_current_item } from "../../Redux/Shopping/ShoppingAction"
import { connect } from 'react-redux';

const Product = ({ productData , add_To_Cart, currentItem }) => {    // name should be same as send props 
  //destructor productData (contain products list from shopReducer) its a props
  return (
    <div className={styles.product}>
      <img className={styles.product__image}
        src={productData.image}
       alt={productData.title} 
       />

      <div className={styles.product__details}>
        <p className={styles.details__title}>{productData.title}</p>
        <p className={styles.details__desc}>{productData.description}</p>
        <p className={styles.details__price}>$ {productData.price}</p>
      </div>

      <div className={styles.product__buttons}>
        <Link to={`/product/${productData.id}`}>
          <button className={`${styles.buttons__btn} ${styles.buttons__view}`}   /* adding multiple css property*/
          onClick={()=>currentItem(productData)}
          >  
            View Item
          </button>
        </Link>
        <button className={`${styles.buttons__btn} ${styles.buttons__add}`}
        onClick={()=>add_To_Cart(productData.id)}
        >
          Add To Cart
        </button>
      </div>
    </div>
  );
};


const mapDispatchToProps = dispatch => {
  return {
    add_To_Cart : (id) => dispatch(add_To_Cart(id)),   //() => dispatch();  anonymous function
    currentItem : (item) => dispatch(lood_current_item(item)),
  }
}


export default connect(null, mapDispatchToProps)(Product);
