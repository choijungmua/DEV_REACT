import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";

function Header() {
  const [mouseOver, setMouseOver] = useState(false);
  const [showText, setShowText] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2300);
    return () => clearTimeout(timer); // 컴포넌트가 언마운트되면 타이머 클리어
  }, []);

  return (
    <header>
      {showText && (
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
      )}
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
