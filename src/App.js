import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Skills from "./Routes/Skills";
import Project from "./Routes/Project";
import Layout from "./Component/Layout/Layout/Layout";
function App() {
  return (
    <Router>
      <Layout>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/Skills" element={<Skills />} />
          <Route path="/Project" element={<Project />} />
        </Routes>
      </Layout>
    </Router>
  );
}
export default App;
