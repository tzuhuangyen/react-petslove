import { Routes, Route } from "react-router-dom";
import "bootstrap/dist/css/bootstrap.min.css";
import "./App.css";
import "./assets/all.scss";
import Home from "./assets/pages/Home";
import Index from "./assets/pages/Index";
import Header from "./assets/pages/Header";
import Shop from "./assets/pages/Shop";
import Blog from "./assets/pages/Blog";
import SignUp from "./assets/pages/SignUp";

import Footer from "./assets/pages/Footer";
function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/react-petslove" element={<Index />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/user" element={<SignUp />} />
        {/* <Route path="/favorite" element={<Favorite />} /> */}
        <Route path="/blog" element={<Blog />} />
      </Routes>

      <Footer />
    </>
  );
}

export default App;
