import { createContext, useState } from "react";
import { useEffect } from "react";

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

export const CartContext = createContext({
  isCartOpen: false,
  setIsCartOpen: () => {},
  cartItems: [],
  addItemToCart: () => {},
  removeItemFromCart: () => {},
  deleteItemFromCart:() => {} ,
  cartTotal: 0
});

export const CartProvider = ({ children }) => {
  const [isCartOpen, setIsCartOpen] = useState(false);
  const [cartItems, setcartItems] = useState([]);
  const [cartTotal , setCartTotal] = useState(0);


  useEffect(() => {
      const total = cartItems.reduce((sum ,item)=> sum+item.quantity*item.price , 0)
      setCartTotal(total);
} , [cartItems]);


  const addItemToCart = (product) => {
    setcartItems(addItem(cartItems, product));
  };

  const removeItemFromCart = (item) => {
      setcartItems(removeItem(cartItems,item))
  }

  const deleteItemFromCart = (item) => {
      setcartItems(deleteItem(cartItems,item))
  }

  const value = { isCartOpen, setIsCartOpen, cartItems, addItemToCart , removeItemFromCart ,deleteItemFromCart ,cartTotal };
  return <CartContext.Provider value={value}>{children}</CartContext.Provider>;
};
