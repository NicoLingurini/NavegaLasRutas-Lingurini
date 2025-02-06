import { CartWidget } from "./CartWidget";

export const NavBar = () => (
  <div className="contenedorGeneral">
    <img src="../img/logobazar.jpg" className="logo" />
    <ul className="lista">
      <li className="boton">
        <a className="botonPalabra" href="#">
          Inicio
        </a>
      </li>
      <li className="boton">
        <a className="botonPalabra" href="#">
          Ofertas
        </a>
      </li>
      <li className="boton">
        <a className="botonPalabra" href="#">
          Productos
        </a>
      </li>
      <li className="boton">
        <a className="botonPalabra" href="#">
          Contacto
        </a>
      </li>
      <li className="boton">
        <a className="botonPalabra" href="#">
          Preguntas Frecuentes
        </a>
      </li>
      <li className="boton">
        <a className="botonPalabra" href="#">
          Nosotros
        </a>
      </li>
    </ul>
    <CartWidget />
  </div>
);
