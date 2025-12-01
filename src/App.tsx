import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/home/Home";
import Navbar from "./pages/navigation/Navbar";
import Contact from "./pages/contact/Contact";
import Work from "./pages/work/Work";
import Skills from "./pages/skills/Skills";
import About from "./pages/about/About";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/a-propos" element={<About />} />
        <Route path="/projets" element={<Work />} />
        <Route path="/competences" element={<Skills />} />
        <Route path="/contact" element={<Contact />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
