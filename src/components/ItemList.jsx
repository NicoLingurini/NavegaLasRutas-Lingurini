import { Articulo } from "./item";

export const ArticuloList = ({ articulos }) =>
  articulos.map((articulo) => (
    <Articulo key={articulo.id} articulo={articulo} />
  ));
