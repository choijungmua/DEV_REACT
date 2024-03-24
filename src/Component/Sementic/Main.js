import "./Main.css";
import { useEffect, useState } from "react";
import AdPage1 from "../AdPage/AdPage1";
import AdPage2 from "../AdPage/AdPage2";
import AdPage3 from "../AdPage/AdPage3";
function Main() {
  const [currentPage, setCurrentPage] = useState(0);
  const ads = [<AdPage1 />, <AdPage2 />, <AdPage3 />];

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPage((prevPage) =>
        prevPage === ads.length - 1 ? 0 : prevPage + 1
      );
    }, 5000);

    return () => clearInterval(intervalId);
  }, []);
  return (
    <>
      <AdPage1 />
    </>
  );
  // <div>{ads[currentPage]}</div>;
}
export default Main;
