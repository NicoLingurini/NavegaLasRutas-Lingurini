import { useEffect, useState, useContext } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import { getFirestore, getDoc, doc } from "firebase/firestore";
import { CartContext } from "../contexts/CartContext";
import { ItemCount } from "./ItemCount";

export const Detail = () => {
  const [product, setProduct] = useState(null);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  const { onAdd } = useContext(CartContext);
  useEffect(() => {
    const db = getFirestore();
    const refDoc = doc(db, "items", id);
    getDoc(refDoc)
      .then((snapshot) => {
        setProduct({ ...snapshot.data(), id: snapshot.id });
      })
      .finally(() => setLoading(false));
  }, [id]);

  const add = (count) => {
    onAdd({ ...product, count });
  };

  if (loading) return "CARGANDO";

  return (
    <div className="tarjetadetalle">
      <Container className=" d-flex justify-content-center">
        <Card style={{ width: "18rem" }}>
          <Card.Img variant="top" src={product.imageURL} />
          <Card.Body>
            <Card.Title>{product.title}</Card.Title>
            <Card.Text>{product.descripcion}</Card.Text>
            <Card.Text>${product.price}</Card.Text>
            <Card.Text>STOCK: {product.stock}</Card.Text>
          </Card.Body>
        </Card>
      </Container>
      <ItemCount stock={product.stock} add={add} />
    </div>
  );
};
