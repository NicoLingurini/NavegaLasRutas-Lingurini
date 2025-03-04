import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

import { NavLink } from "react-router-dom";

import { CartWidget, CartWidget2 } from "./CartWidget";

export const NavBarHome = () => (
  <Navbar className="d-flex">
    <Container>
      <CartWidget2 />

      <Nav>
        <Nav.Link to="/" as={NavLink}>
          INICIO
        </Nav.Link>
        <Nav.Link to="/type/BB" as={NavLink}>
          VAJILLAS
        </Nav.Link>
        <Nav.Link to="/type/AA" as={NavLink}>
          CUBIERTOS
        </Nav.Link>
      </Nav>

      <CartWidget />
    </Container>
  </Navbar>
);
