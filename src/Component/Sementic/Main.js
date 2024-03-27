import "./Main.scss";
import { useEffect, useState, useRef } from "react";
import AdPage1 from "../AdPage/AdPage1";
import AdPage2 from "../AdPage/AdPage2";
import AdPage3 from "../AdPage/AdPage3";
function Main() {
  const DIVIDER_HEIGHT = 5;
  const divContainerRef = useRef();
  const [currentPage, setCurrentPage] = useState(0);
  const ads = [<AdPage1 />, <AdPage2 />, <AdPage3 />];

  //페이지 자동전환 효과
  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentPage((prevPage) =>
        prevPage === ads.length - 1 ? 0 : prevPage + 1
      );
    }, 1000);

    return () => clearInterval(intervalId);
  }, []);
  //스크롤 행동 구현
  useEffect(() => {
    const handleWheelChange = (e) => {
      e.preventDefault();
      const { deltaY } = e;
      const { scrollTop } = divContainerRef.current;
      const pageHeight = window.innerHeight;
      if (deltaY > 0) {
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          console.log("현재 1페이지, down");
          divContainerRef.current.scrollTo({
            top: pageHeight,
            left: 0,
            behavior: "smooth",
          });
        }
        if (scrollTop >= 0 && scrollTop < pageHeight) {
          console.log("현재 1페이지, down");
          divContainerRef.current.scrollTo({
            top: pageHeight * 2 + DIVIDER_HEIGHT * 2,
            left: 0,
            behavior: "smooth",
          });
        }
      }
      //https://codingbroker.tistory.com/128
    };
    const outerDivRefCurrent = divContainerRef.current;
    outerDivRefCurrent.addEventListener("wheel", handleWheelChange);
    return () => {
      outerDivRefCurrent.removeEventListener("wheel", handleWheelChange);
    };
  }, []);
  return (
    <>
      <div ref={divContainerRef} className="outContainer">
        <AdPage1 />
        <AdPage2 />
        <AdPage3 />
      </div>
    </>
  );
  // <div>{ads[currentPage]}</div>;
}
export default Main;
