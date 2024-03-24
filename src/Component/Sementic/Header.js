import { Link } from "react-router-dom";
import Home from "../../Routes/Home";
import Blog from "../../Routes/Blog";
import Skills from "../../Routes/Skills";
import Project from "../../Routes/Project";
import "./Header.css";
function Header() {
  return (
    <header>
      <h1 className="mainLogo">BLOG</h1>
      <ul>
        <li>
          <Link to="/">Home</Link>
        </li>
        <li>
          <Link to="/Blog">Blog</Link>
        </li>
        <li>
          <Link to="/Project">Project</Link>
        </li>
        <li>
          <Link to="/Skills">Skills</Link>
        </li>
      </ul>
    </header>
  );
}
export default Header;
