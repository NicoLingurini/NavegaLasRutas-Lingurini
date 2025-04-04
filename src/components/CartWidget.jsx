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
      <img
        src="https://github.com/NicoLingurini/ProyectoFinal-Lingurini/blob/main/img/carrito.jpg?raw=true"
        className="logo"
      />
      <Button variant="primary">VER CARRITO</Button>
      <span className="badge text-bg-primary rounded-pill">{totalCount}</span>
    </div>
  );
};
export const CartWidgetImg2 = () => (
  <img
    src="https://github.com/NicoLingurini/ProyectoFinal-Lingurini/blob/main/img/logobazar.jpg?raw=true"
    className="logo"
  />
);
