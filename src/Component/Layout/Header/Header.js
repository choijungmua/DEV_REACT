import { Link } from "react-router-dom";
import Home from "../../../Routes/Home";
import Blog from "../../../Routes/Blog";
import Skills from "../../../Routes/Skills";
import Project from "../../../Routes/Project";
import "./Header.css";
function Header() {
  return (
    <header>
      <div className="smContainer">FrontEnd Developer</div>
      <div className="container">
        <ul>
          <li>
            <Link to="/Project" className="Link">
              Project
            </Link>
          </li>
          <li>
            <Link to="/Skills" className="Link">
              Skills
            </Link>
          </li>
          <li>
            <Link to="/" className="Link">
              Home
            </Link>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
