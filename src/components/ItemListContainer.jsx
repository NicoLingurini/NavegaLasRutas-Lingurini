import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import { Container } from "react-bootstrap";

import { articulos } from "../data/data";
import { ArticuloList } from "./itemList";

export const ArticuloListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    new Promise((resolve, reject) => setTimeout(() => resolve(articulos), 3000))
      .then((respuesta) => {
        if (!id) {
          setProducts(respuesta);
        } else {
          const filtered = respuesta.filter(
            (articulos) => articulos.type === id
          );
          setProducts(filtered);
        }
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return "CARGANDO";

  return (
    <Container className="d-flex">
      <ArticuloList articulos={products} />
    </Container>
  );
};
