import { Link } from "react-router-dom";
import { useState, useEffect } from "react";
import "./Header.css";
import { atom, selector } from "recoil";

function Header() {
  const [mouseOver, setMouseOver] = useState(false);
  const [showText, setShowText] = useState(false);
  const [showHome, setShowHome] = useState("Home");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true);
    }, 2300);
    return () => clearTimeout(timer); // 컴포넌트가 언마운트되면 타이머 클리어
  }, []);

  const HomeOver = () => {
    setShowHome((Over) => !Over);
  };
  const HomeLeave = () => {
    setShowHome((Over) => !Over);
  };
  return (
    <header>
      {showText && (
        <div
          className="smContainer"
          onMouseOver={() => {
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
              <Link
                to="/"
                className="Link"
                onMouseEnter={HomeOver}
                onMouseLeave={HomeLeave}
              >
                {showHome ? "Home" : undefined}
              </Link>
            </li>
          </ul>
        </div>
      )}
    </header>
  );
}

export default Header;
