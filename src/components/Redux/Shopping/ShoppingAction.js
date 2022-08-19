import * as actionTypes from './ShoppingTypes';

export const add_To_Cart = (id) =>{
    return {
        type: actionTypes.ADD_TO_CART,
        payload: {
            addId : id,
        }
    }
}

export const remove_From_Cart =(id) => {
    return {
         type : actionTypes.REMOVE_FROM_CART,
         payload: {
            removeId : id, 
         }
    }
}

export const adjust_Qty = (id,value) =>{
    return {
        type : actionTypes.ADJUST_QTY,
        payload : {
            id : id,
            qtyValue : value,
        }
    }
}

export const lood_current_item = (item) => {
    return {
        type : actionTypes.LOAD_CURRENT_ITEM,
        payload : item,
    }
}