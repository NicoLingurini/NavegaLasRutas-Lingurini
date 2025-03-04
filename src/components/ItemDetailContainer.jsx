import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";

import { articulos } from "../data/data";

export const Detail = () => {
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    new Promise((resolve, reject) => setTimeout(() => resolve(articulos), 3000))
      .then((respuesta) => {
        const finded = respuesta.find(
          (articulos) => articulos.id === Number(id)
        );
        setProduct(finded);
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return "CARGANDO";

  return (
    <Container className="d-flex justify-content-center">
      <Card style={{ width: "18rem" }}>
        <Card.Img variant="top" src={product.imagen} />
        <Card.Body>
          <Card.Title>{product.nombre}</Card.Title>
          <Card.Text>{product.descripcion}</Card.Text>
          <Card.Text>${product.precio}</Card.Text>
        </Card.Body>
      </Card>
    </Container>
  );
};
