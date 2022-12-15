import { BrowserRouter, Route, Router, Routes } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import About from "./pages/about/About";
import Team from "./pages/team/Team";
import Register from "./pages/register/Register";
import Contact from "./pages/contact/Contact";
import Home from "./pages/home/Home";

function App() {
  return (
    <>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route exact path="/about" element={<About />} />
          <Route exact path="/team" element={<Team />} />
          <Route exact path="/register" element={<Register />} />
          <Route exact path="/contact" element={<Contact />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
