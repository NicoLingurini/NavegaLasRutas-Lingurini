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
        src="https://codigofuentenet.wordpress.com/wp-content/uploads/2013/02/shoppingcartempty.jpg"
        className="logo"
      />
      <Button variant="primary">VER CARRITO</Button>
      <span className="badge text-bg-primary rounded-pill">{totalCount}</span>
    </div>
  );
};
export const CartWidgetImg2 = () => (
  <img
    src="https://mir-s3-cdn-cf.behance.net/project_modules/max_1200/1ae2f745704033.583c40fb048e9.jpg"
    className="logo"
  />
);
