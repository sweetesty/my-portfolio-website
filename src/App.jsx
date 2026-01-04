import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Hero from "./component/Hero";
import Home from "./pages/Home";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Contact from "./pages/contact";
import NotFound from "./pages/NotFound";
import Layout from "./component/Layout";

function App() {
  return (
    <Router>
      <Layout >
      <div className="bg-black min-h-screen pt-16">
        <Routes>
          <Route path="/" element={< Hero/>}/>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </div>
      </Layout>
    </Router>
  );
}

export default App;

