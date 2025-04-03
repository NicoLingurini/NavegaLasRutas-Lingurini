import { useContext } from "react";
import { CartContext } from "../contexts/CartContext";
import Button from "react-bootstrap/Button";

export const CartWidgetImg1 = () => {
  const { items } = useContext(CartContext);
  const totalCount = items.reduce(
    (acumulador, valorActual) => acumulador + valorActual.count,
    0
  );
  return (
    <div>
      <img src="../img/carrito.jpg" className="logo" />
      <Button variant="primary">VER CARRITO</Button>
      <span className="badge text-bg-primary rounded-pill">{totalCount}</span>
    </div>
  );
};
export const CartWidgetImg2 = () => (
  <img src="../img/logobazar.jpg" className="logo" />
);
