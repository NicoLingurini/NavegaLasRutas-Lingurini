import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { NavLink } from "react-router-dom";
import { CartWidgetImg1, CartWidgetImg2 } from "./CartWidget";

export const NavBarHome = () => {
  return (
    <Navbar className="barra navbar  bg-body-tertiary">
      <Container className="container-fluid">
        <CartWidgetImg2 />

        <Nav>
          <Nav.Link to="/" as={NavLink}>
            INICIO
          </Nav.Link>
          <Nav.Link to="/type/vajilla" as={NavLink}>
            VAJILLAS
          </Nav.Link>
          <Nav.Link to="/type/cubierto" as={NavLink}>
            CUBIERTOS
          </Nav.Link>
        </Nav>
        <NavLink to="/cart" as={NavLink}>
          <CartWidgetImg1 />
        </NavLink>
      </Container>
    </Navbar>
  );
};
