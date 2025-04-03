import { BrowserRouter, Routes, Route } from "react-router-dom";
import { ArticuloListContainer } from "./components/ItemListContainer";
import { NavBarHome } from "./components/NavBar";
import { Detail } from "./components/ItemDetailContainer";
import { Provider } from "./contexts/CartContext";
import "./App.css";
import { Cart } from "./components/Cart";
import { Footer } from "./components/Footer";

function App() {
  return (
    <Provider>
      <BrowserRouter>
        <NavBarHome />
        <Routes>
          <Route path="/" element={<ArticuloListContainer />} />
          <Route path="/type/:id" element={<ArticuloListContainer />} />
          <Route path="/detail/:id" element={<Detail />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="*" element="404 error" />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
