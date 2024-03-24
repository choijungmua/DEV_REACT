import { useEffect, useState } from "react";
import AdPage1 from "../Component/AdPage/AdPage1";
import AdPage2 from "../Component/AdPage/AdPage2";
import AdPage3 from "../Component/AdPage/AdPage3";
import Header from "../Component/Sementic/Header";
import Main from "../Component/Sementic/Main";
function Home() {
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
    <div>
      <Header />
      <Main />
      {/* <h1>광고 만드는 화면</h1>
      {ads[currentPage]} */}
    </div>
  );
}

export default Home;
