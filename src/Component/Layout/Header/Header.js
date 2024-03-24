import { Link } from "react-router-dom";
import Home from "../../../Routes/Home";
import Skills from "../../../Routes/Skills";
import Project from "../../../Routes/Project";
import "./Header.css";
import { useState } from "react";
function Header() {
  const [mouseOver, setMouseOver] = useState(false);

  return (
    <header onMouse>
      <div
        className="smContainer"
        onMouseOver={() => {
          setMouseOver((Over) => !Over);
        }}
        onMouseLeave={() => {
          setMouseOver((Over) => !Over);
        }}
      >
        FrontEnd Developer
      </div>
      {mouseOver && (
        <div
          className="container"
          onMouseEnter={() => {
            setMouseOver(true);
          }}
          onMouseLeave={() => {
            setMouseOver(false);
          }}
        >
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
      )}
    </header>
  );
}
export default Header;
