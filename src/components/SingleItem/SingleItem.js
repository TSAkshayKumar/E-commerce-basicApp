import React from "react";
import styles from "./SingleItem.module.css";
import {add_To_Cart} from '../Redux/Shopping/ShoppingAction';
import { connect } from 'react-redux';

const SingleItem = ({ addToCrt , crrntItem}) => {
  return (
    <div className={styles.singleItem}>
      <img 
        className={styles.singleItem__image} 
        src={crrntItem.image}
        alt={crrntItem.title}
       />
      <div className={styles.singleItem__details}>
        <p className={styles.details__title}>{crrntItem.title}</p>
        <p className={styles.details__description}>{crrntItem.description}</p>
        <p className={styles.details__price}>$ {crrntItem.price}</p>

        <button className={styles.details__addBtn}
         onClick={()=>addToCrt(crrntItem.id)}
        >Add To Cart</button>
      </div>
    </div>
  );
};


const mapStateToProps = state => {
   return {
     crrntItem : state.shop.currentItem,
   }
}

const mapDispatchToProps = dispatch => {
  return {
    addToCrt : (id)=>{dispatch(add_To_Cart(id))} 
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(SingleItem);
