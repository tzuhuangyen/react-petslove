import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./assets/all.scss";
import Home from "./assets/pages/Home";
import Header from "./assets/pages/Header";
import Shop from "./assets/pages/Shop";
import Footer from "./assets/pages/Footer";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/react-petslove" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        {/* <Route path="/user" element={<Login />} />
        <Route path="/favorite" element={<Favorite />} /> */}
      </Routes>
      <button type="button" className=" testBtn">
        test
      </button>
      <Footer />
    </>
  );
}

export default App;
