import { BrowserRouter, Routes, Route } from "react-router-dom";

import { ArticuloListContainer } from "./components/ItemListContainer";
import { NavBarHome } from "./components/NavBar";
import { Detail } from "./components/ItemDetailContainer";
import "./App.css";

function App() {
  return (
    <BrowserRouter>
      <NavBarHome />
      <Routes>
        <Route path="/" element={<ArticuloListContainer />} />
        <Route path="/type/:id" element={<ArticuloListContainer />} />
        <Route path="/detail/:id" element={<Detail />} />
        <Route path="*" element="404 error" />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
