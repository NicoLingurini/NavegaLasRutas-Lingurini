import { Articulo } from "./Item";

export const ArticuloList = ({ articulos }) =>
  articulos.map((articulo) => (
    <Articulo key={articulo.id} articulo={articulo} />
  ));
