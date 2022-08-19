import React,{useState} from "react";
import styles from "./CartItem.module.css";
import { remove_From_Cart, adjust_Qty } from '../../Redux/Shopping/ShoppingAction';
import { connect } from 'react-redux';

const CartItem = ({ cartData, remove , adjust_qty }) => {

  const [quantity,setQuantity] = useState(cartData.qty)
  const changeHandler = (e)=>{
        setQuantity(e.target.value);
        //alert(e.target.value);
        //alert(e.target.id);
        //alert(cartData.id)                                     // why e.target.id is not working here
        adjust_qty(cartData.id, e.target.value);
  }

  return (
    <div className={styles.cartItem}>
      <img
        className={styles.cartItem__image}
        src={cartData.image}
        alt={cartData.title}
      />
      <div className={styles.cartItem__details}>
        <p className={styles.details__title}>{cartData.title}</p>
        <p className={styles.details__desc}>{cartData.description}</p>
        <p className={styles.details__price}>$ {cartData.price}</p>
      </div>
      <div className={styles.cartItem__actions}>
        <div className={styles.cartItem__qty}>
          <label htmlFor="qty">Qty</label>
          <input min="1" type="number" id={cartData.id} name="qty" value={quantity} 
             onChange={changeHandler}
           />
        </div>
        <button className={styles.actions__deleteItemBtn}
        onClick={()=> remove(cartData.id)}
        >
          <img
            src="https://cdn.icon-icons.com/icons2/692/PNG/512/seo-social-web-network-internet_262_icon-icons.com_61518.png"
            alt="delete"
          />
        </button>
      </div>
    </div>
  );
};


const mapDispatchToProps = dispatch => {
  return {
      remove : (id) => {dispatch(remove_From_Cart(id))},
      adjust_qty : (id,value) => {dispatch(adjust_Qty(id,value))}
  }
}



export default connect(null, mapDispatchToProps)(CartItem);
