import { useState } from "react";
import { addDoc, collection, getFirestore } from "firebase/firestore";
import Button from "react-bootstrap/Button";
import Col from "react-bootstrap/Col";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";

const initialValues = {
  name: "",
  lastname: "",
  email: "",
};

export const FormOrder = ({ items, onRemove }) => {
  const [validated, setValidated] = useState(false);
  const [buyer, setBuyer] = useState(initialValues);
  const total = items.length
    ? items.reduce(
        (acumulado, actual) => acumulado + actual.count * actual.price,
        0
      )
    : 0;

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    if (form.checkValidity() === false) {
      event.preventDefault();
      event.stopPropagation();
    }

    setValidated(true);
  };

  const handleOrder = () => {
    if (!buyer.name || !buyer.lastname || !buyer.email) {
      alert("Todos los campos del formulario son obligatorios.");
      return;
    }

    const order = {
      buyer,
      items,
      total,
    };
    const db = getFirestore();
    const orderCollection = collection(db, "orders");
    addDoc(orderCollection, order)
      .then((snapshot) => {
        if (snapshot.id) {
          alert("Su orden: " + snapshot.id + " ha sido completada !");
        }
      })
      .finally(() => {
        setBuyer(initialValues);
        onRemove();
      });
  };
  const handleChange = (ev) => {
    setBuyer({ ...buyer, [ev.target.name]: ev.target.value });
  };

  return (
    <>
      <h4 className="form m-0">TOTAL: ${total}</h4>
      <Form
        className="form"
        noValidate
        validated={validated}
        onSubmit={handleSubmit}
      >
        <Row className="mb-3">
          <Form.Group as={Col} md="4" controlId="validationCustom01">
            <Form.Label>Nombre</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Nombre"
              name="name"
              value={buyer.name}
              onChange={handleChange}
            />
            <Form.Control.Feedback>Nombre valido!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom02">
            <Form.Label>Apellido</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="Apellido"
              name="lastname"
              value={buyer.lastname}
              onChange={handleChange}
            />
            <Form.Control.Feedback>Apellido valido!</Form.Control.Feedback>
          </Form.Group>
          <Form.Group as={Col} md="4" controlId="validationCustom03">
            <Form.Label>E-Mail</Form.Label>
            <Form.Control
              required
              type="text"
              placeholder="E-Mail"
              name="email"
              value={buyer.email}
              onChange={handleChange}
            />
            <Form.Control.Feedback>E-Mail valido!</Form.Control.Feedback>
          </Form.Group>
        </Row>
        <Button variant="primary" onClick={handleOrder}>
          COMPRAR
        </Button>
      </Form>
    </>
  );
};
