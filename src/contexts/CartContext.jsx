import { createContext, useState } from "react";

export const CartContext = createContext();

export const Provider = ({ children }) => {
  const [items, setItems] = useState([]);

  const onAdd = (item) => {
    const existingItem = items.find((product) => product.id === item.id);
    if (existingItem) {
      const updatedItems = items.map((product) =>
        product.id === item.id
          ? { ...product, count: product.count + item.count }
          : product
      );
      setItems(updatedItems);
    } else {
      setItems([...items, item]);
    }
  };
  const deleteItem = (id) => {
    const cleanProduct = items.filter((producto) => producto.id !== id);
    setItems(cleanProduct);
  };

  const onRemove = () => setItems([]);

  return (
    <CartContext.Provider value={{ items, onAdd, onRemove, deleteItem }}>
      {children}
    </CartContext.Provider>
  );
};
