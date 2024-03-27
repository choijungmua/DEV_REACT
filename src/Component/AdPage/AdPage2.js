import "./AdPage.scss";
import { useEffect, useState, useRef } from "react";

function AdPage2() {
  const [word1, setWord1] = useState("");
  const [word2, setWord2] = useState("");
  const sentence1 = "안녕하세요 저는 성장기 개발자 최정무입니다.";
  const sentence2 = "성장의 기회를 얻기 위해 꿈을 키워나가겠습니다.";
  const currentIndex1 = useRef(0);
  const currentIndex2 = useRef(0);

  useEffect(() => {
    const timer1 = setInterval(() => {
      setWord1((state) => {
        if (currentIndex1.current < sentence1.length) {
          const newState = state + sentence1[currentIndex1.current];
          currentIndex1.current += 1;
          return newState;
        } else {
          clearInterval(timer1); // 타이머 정지
          return state;
        }
      });
    }, 50);

    return () => clearInterval(timer1);
  }, []); // 컴포넌트가 처음 렌더링될 때만 타이머 시작

  useEffect(() => {
    // timer1이 종료된 후에 timer2를 시작
    if (word1 === sentence1) {
      const timer2 = setInterval(() => {
        setWord2((state) => {
          if (currentIndex2.current < sentence2.length) {
            const newState = state + sentence2[currentIndex2.current];
            currentIndex2.current += 1;
            return newState;
          } else {
            clearInterval(timer2); // 타이머 정지
            return state;
          }
        });
      }, 50);

      return () => clearInterval(timer2);
    }
  }, [word1]); // word1의 변화를 감지하여 실행

  return (
    <div className="AdContainer">
      <div className="adMain">
        <p className="adDevelop">FrontEnd Developer</p>
        <div className="adLine"></div>
        <span>
          <p>{word1}</p>
          <p>{word2}</p>
        </span>
      </div>
    </div>
  );
}

export default AdPage2;
