import "./App.css";
import { Routes, Route } from "react-router-dom";
import Product from "./components/Product";
import Pricing from "./components/Pricing";
import Home from "./components/Home";
import Contact from "./components/Contact";
import Support from "./components/Support";
import Login from "./components/Login";
import SignUp from "./components/SignUp";
import Header from "./components/Header";

function App() {
  return (
    <>
      <Header />
      <Routes>
        <Route path="/williams" element={<Home />}></Route>
        <Route path="product" element={<Product />}></Route>
        <Route path="pricing" element={<Pricing />}></Route>
        <Route path="support" element={<Support />}></Route>
        <Route path="contact" element={<Contact />}></Route>
        <Route path="login" element={<Login />}></Route>
        <Route path="signup" element={<SignUp />}></Route>
      </Routes>
    </>
  );
}

export default App;
