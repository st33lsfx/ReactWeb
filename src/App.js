import TheNavigation from "./components/TheNavigation";
import Footer from "./components/Footer";
import { Routes, Route } from "react-router-dom";

import Home from "./views/Home";
import Contact from "./views/Contact";
import About from "./views/About";
import Login from "./components/login/Login"
import Register from "./components/register/Register"


import "./App.css";

function App() {
  return (
    <div className="App">
      <TheNavigation />
      <main className="content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/about" element={<About />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
