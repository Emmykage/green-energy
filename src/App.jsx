import { Routes, Route } from "react-router-dom";

import HomePage from "./pages/Home";
import About from "./pages/about/About";
import Layout from "./components/layout/Layout";
import "./App.css";
import Services from "./pages/service/Service";
import Projects from "./pages/projects/Project";
import Sectors from "./pages/sectors/Sectors";
import Leadership from "./pages/leadership/Leadership";

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
      </Route>
    </Routes>
  );
}

export default App;
