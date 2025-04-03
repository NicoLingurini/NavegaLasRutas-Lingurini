import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

export const Articulo = ({ articulo }) => (
  <Container className="d-flex articulo">
    <Card key={articulo.id}>
      <Card.Img
        variant="top"
        src={articulo.imageURL}
        className="ImagenArticulo"
      />
      <Card.Body>
        <Card.Title>{articulo.title}</Card.Title>
        <Card.Text>{articulo.descripcion}</Card.Text>
        <Card.Text>STOCK:{articulo.stock}</Card.Text>
        <Card.Text>PRECIO: ${articulo.price}</Card.Text>
        <Link to={`/detail/${articulo.id}`}>
          <Button variant="primary">VER PRODUCTO</Button>
        </Link>
      </Card.Body>
    </Card>
  </Container>
);
