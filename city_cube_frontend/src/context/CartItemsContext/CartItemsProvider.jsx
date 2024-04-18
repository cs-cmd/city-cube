import CartItemsContext from "./CartItemsContext";
import { useState, useCallback } from 'react';

export default function CartItemsProvider({ children }) {
  const [itemsInCart, setItemsInCart] = useState({});

  const removeItem = useCallback((item) => {
    const newItemsInCart = { ...itemsInCart };
    delete newItemsInCart[item.name];
    setItemsInCart(newItemsInCart);
  }, [itemsInCart]);

  const onItemChange = useCallback((newItem) => {
    const newItemsInCart = {
      ...itemsInCart,
    };

    if (itemsInCart[newItem.name] === undefined) {
      newItemsInCart[newItem.name] = newItem;
    } else {
      const newItemToAdd = { ...itemsInCart[newItem.name] };
      newItemToAdd.amount += newItem.amount;
      newItemsInCart[newItem.name] = newItemToAdd;
    }

    setItemsInCart(newItemsInCart);
  }, [itemsInCart, setItemsInCart]);

  return (
    <CartItemsContext.Provider
      value={{ itemsInCart, onItemChange, removeItem }}
    >
      {children}
    </CartItemsContext.Provider>
  );
}