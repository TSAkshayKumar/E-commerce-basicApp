import React,{useState,useEffect} from "react";
import { Link } from "react-router-dom";
import styles from "./Navbar.module.css";
import { connect } from "react-redux";

const Navbar = ({ cart }) => {
  const [cartCount, setCartCount] = useState(0);   // used to update var with state info
   //useEffect syntax : useEffect(()=>{},[]) use when we want to update a var value based on change in something

  useEffect(() => {
    let count = 0;
    cart.forEach((cartItem)=> {
       count += cartItem.qty;
      }
    );

    setCartCount(count);
  },[cartCount, cart])          

  return (
    <div className={styles.navbar}>
      <Link to="/">
        <h2 className={styles.navbar__logo}>Redux Shopping Cart</h2>
      </Link>
      <Link to="/cart">
        <div className={styles.navbar__cart}>
          <h3 className={styles.cart__title}>Cart</h3>
          <img
            className={styles.cart__image}
            src="https://cdn.icon-icons.com/icons2/606/PNG/512/shopping-cart-add-button_icon-icons.com_56132.png"
            alt="shopping cart"
          />
        <div className={styles.cart__counter}>{cartCount}</div>
        </div>
      </Link>
    </div>
  );
};

const mapStateToProps = state => {
  return {
    cart : state.shop.cart,
  }
}

export default connect(mapStateToProps)(Navbar);
