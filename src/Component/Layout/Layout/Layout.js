import React from "react";
import Header from "../Header/Header";
import Footer from "../Footer/Footer";
import { useEffect, useState } from "react";
import "./Home.css";
const Layout = ({ children }) => {
  const [cursorPosition, setCursorPosition] = useState({ x: 0, y: 0 });
  const [mouseOver, setMouseOver] = useState(false);
  useEffect(() => {
    const updateCursorPosition = (e) => {
      setCursorPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener("mousemove", updateCursorPosition);
    return () => {
      window.removeEventListener("mousemove", updateCursorPosition);
    };
  }, []);
  return (
    <div>
      <Header />
      <main>
        {children}
        <div
          className="cursor"
          style={{ left: cursorPosition.x, top: cursorPosition.y }}
        ></div>
      </main>
      <Footer />
    </div>
  );
};

export default Layout;
