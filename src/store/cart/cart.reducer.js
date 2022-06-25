import { USER_ACTION_TYPES } from "./cart.types";

const CART_INITIAL_STATE = {
    isCartOpen: false,
    cartItems: [],
}

 const cartReducer = (state = CART_INITIAL_STATE ,action ={}) => {
    const {type ,payload} = action;
  
    switch(type)
    {
        case USER_ACTION_TYPES.SET_CART_ITEM:
            return({
                ...state,
                cartItems:payload
            })
        case USER_ACTION_TYPES.TOGGLE_IS_CART_OPEN:
             return({
                 ...state,
                 isCartOpen:payload
             })
        default:
        return state;
    }
  }

  export default cartReducer;;