import Button from "react-bootstrap/Button";
import { useState } from "react";

export const ItemCount = ({ stock, add }) => {
  const [count, setCount] = useState(1);
  const handleAdd = () => {
    if (stock > count) setCount((prev) => prev + 1);
  };
  const handleRemove = () => {
    if (count > 1) setCount((prev) => prev - 1);
  };
  const addToCart = () => {
    setCount(1);
    add(count);
  };

  return (
    <>
      <Button variant="primary" onClick={handleRemove}>
        -
      </Button>
      <span>{count}</span>
      <Button variant="primary" onClick={handleAdd}>
        +
      </Button>
      <hr />
      <Button variant="primary" onClick={addToCart}>
        AGREGAR AL CARRITO
      </Button>
    </>
  );
};
