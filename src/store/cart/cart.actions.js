import { createAction } from "../../utils/reducer/reducer.utils";
import { CART_ACTION_TYPES } from "./cart.types";

//const cartItems = store.getState().cart.cartItems;

const addItem = (cartItems, productToAdd) => {
    const itemExists = cartItems.find(
      (cartItem) => cartItem.id === productToAdd.id
    );
  
    if (itemExists) {
      return cartItems.map((cartItem) =>
        cartItem.id === productToAdd.id
          ? { ...cartItem, quantity: cartItem.quantity + 1 }
          : cartItem
      );
    }
  
    return [...cartItems, { ...productToAdd, quantity: 1 }];
  };
  
  const removeItem = (cartItems , item) => {
      const itemToRemove = cartItems.find(
          (cartItem) => cartItem.id === item.id
        );
        if(itemToRemove.quantity===1)
        {
            return cartItems.filter((cartItem) => cartItem.id !== item.id )
        }
  
      return cartItems.map((cartItem) =>
        cartItem.id === item.id
          ? { ...cartItem, quantity: cartItem.quantity - 1 }
          : cartItem
      );
  }
  
  
  const deleteItem = (cartItems , item) => {
  
          return cartItems.filter((cartItem) => cartItem.id !== item.id )
  }


  export const setIsCartOpen = (payload) => createAction(CART_ACTION_TYPES.TOGGLE_IS_CART_OPEN , payload)
 

  export const addItemToCart = (cartItems , product) => {
    const newCartItems = addItem(cartItems, product);
    return createAction(CART_ACTION_TYPES.SET_CART_ITEM , newCartItems)
 
   };
 
   export const removeItemFromCart = (cartItems ,item) => {
     const newCartItems = removeItem(cartItems,item)
     return createAction(CART_ACTION_TYPES.SET_CART_ITEM , newCartItems)
   }
 
   export const deleteItemFromCart = (cartItems ,item) => {
     const newCartItems =deleteItem(cartItems,item)
     return createAction(CART_ACTION_TYPES.SET_CART_ITEM , newCartItems)
   }

 
