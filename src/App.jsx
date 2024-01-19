import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./assets/all.scss";
import Home from "./assets/pages/Home";
import Header from "./assets/pages/Header";

function App() {
  return (
    <>
      <Header />
      <button type="button" className=" testBtn">
        test
      </button>
      <Routes>
        <Route path="/react-petslove" element={<Home />} />
        <Route path="/shop" />
        {/* <Route path="/user" element={<Login />} />
        <Route path="/favorite" element={<Favorite />} /> */}
      </Routes>
    </>
  );
}

export default App;
