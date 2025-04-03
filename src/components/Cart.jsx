import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { Button, Container } from "react-bootstrap";
import { Card } from "react-bootstrap";
import { CartContext } from "../contexts/CartContext";
import { FormOrder } from "./CheckoutForm";
export const Cart = () => {
  const { items, onRemove, deleteItem } = useContext(CartContext);
  if (!items.length) {
    return <Navigate to="/" />;
  }

  return (
    <>
      <div className="form">
        <div>
          <Button variant="primary" onClick={onRemove}>
            VACIAR CARRITO
          </Button>
        </div>
        <Container className=" d-flex articulo">
          {items.map((item) => (
            <Card key={item.id} style={{ width: "18rem " }}>
              <Card.Img variant="top" src={item.imageURL} />
              <Card.Body>
                <Card.Title>{item.title}</Card.Title>
                <Card.Title>CANTIDAD:{item.count}</Card.Title>
                <Card.Text>PRECIO: ${item.price}</Card.Text>
                <Button variant="primary" onClick={() => deleteItem(item.id)}>
                  ELIMINAR PRODUCTO
                </Button>
              </Card.Body>
            </Card>
          ))}
        </Container>
      </div>
      <FormOrder items={items} onRemove={onRemove} />
    </>
  );
};
