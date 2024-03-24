import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./Routes/Home";
import Skills from "./Routes/Skills";
import Project from "./Routes/Project";
import Blog from "./Routes/Blog";
function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/Skills" element={<Skills />} />
        <Route path="/Blog" element={<Blog />} />
        <Route path="/Project" element={<Project />} />
      </Routes>
    </Router>
  );
}
export default App;
