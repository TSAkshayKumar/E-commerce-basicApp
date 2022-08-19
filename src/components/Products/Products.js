import React from "react";
import styles from "./Products.module.css";
import { connect } from "react-redux";

import Product from "./Product/Product";  // folder and js file both name Product

const Products = ({ All_Products }) => { // All_Products destructor
  return (
    <div className={styles.products}>
      {   All_Products.map((eachItem) => (
          <Product key={eachItem.id} productData={eachItem} />  //props call, name of props should be same in Product file
          ))
      }
    </div>
  );
};

const mapStateToProps = (state) => {   // mapStateToProps(ye as arg state leta hai)  ko rename bhi kr sakte hai
  return {
    All_Products: state.shop.products,
  };
};


export default connect(mapStateToProps)(Products);

/*  mapStateToProps
All_Products : will contain all the products 
state.    means state se lo product. 
shop      means state mai shop reducer se lo product. multiple reducer hone pr naming aesa hota hai.

*/
/* Products
{ All_Products }  means product jo ki ek list of elements hai usko destructure kr rahe hai 

*/