import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

export const Articulo = ({ articulo }) => (
  <Card key={articulo.id} style={{ width: "18rem" }}>
    <Card.Img variant="top" src={articulo.imagen} />
    <Card.Body>
      <Card.Title>{articulo.nombre}</Card.Title>
      <Card.Text>${articulo.precio}</Card.Text>
      <Link to={`/detail/${articulo.id}`}>
        <Button variant="primary">VER PRODUCTO</Button>
      </Link>
    </Card.Body>
  </Card>
);
