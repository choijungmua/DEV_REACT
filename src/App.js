import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Skills from "./Routes/Skills";
import Project from "./Routes/Project";
import Blog from "./Routes/Blog";
import Layout from "./Component/Layout/Layout/Layout";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Blog" element={<Blog />} />
          <Route path="/Project" element={<Project />} />
        </Routes>
      </Layout>
    </Router>
  );
}
export default App;
