import { Routes, Route } from "react-router-dom";

import About from "./pages/about/About";
import Layout from "./components/layout/Layout";
import "./App.css";
import Services from "./pages/service/Service";
import Projects from "./pages/projects/Project";
import Sectors from "./pages/sectors/Sectors";
import Leadership from "./pages/leadership/Leadership";
import Contact from "./pages/contact/Contact";
import HomePage from "./pages/home/HomePage";

function App() {
  return (
    <Routes>
      <Route element={<Layout />}>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/sectors" element={<Sectors />} />
        <Route path="/leadership" element={<Leadership />} />
        <Route path="/contact" element={<Contact />} />
      </Route>
    </Routes>
  );
}

export default App;
