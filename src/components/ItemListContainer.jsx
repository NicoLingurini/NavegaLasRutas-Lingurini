import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { Container } from "react-bootstrap";
import {
  getFirestore,
  getDocs,
  collection,
  query,
  where,
} from "firebase/firestore";
import { ArticuloList } from "./itemList";

export const ArticuloListContainer = () => {
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(true);
  const { id } = useParams();
  useEffect(() => {
    const db = getFirestore();
    const q = id
      ? query(collection(db, "items"), where("category", "==", id))
      : query(collection(db, "items"));
    getDocs(q)
      .then((snapshot) => {
        setProducts(
          snapshot.docs.map((doc) => {
            return { id: doc.id, ...doc.data() };
          })
        );
      })
      .finally(() => setLoading(false));
  }, [id]);

  if (loading) return "CARGANDO";

  return (
    <Container className="d-flex articulo list">
      <ArticuloList articulos={products} />
    </Container>
  );
};
