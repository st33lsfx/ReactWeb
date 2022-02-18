import TheNavigation from "./components/Navigation/TheNavigation";
import Footer from "./views/Footer/Footer";
import { Routes, Route } from "react-router-dom";

// === Views ===
import Home from "./views/Home/Home";
import Contact from "./views/Contact/Contact";
import About from "./views/About/About";
import Posts from './views/Posts/Posts'
import Login from "./views/Login/Login"
import Register from "./views/Register/Register"

// === Styles ===
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
          <Route path="/posts" element={<Posts />} />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
        </Routes>
      </main>
      <Footer />
    </div>
  );
}

export default App;
