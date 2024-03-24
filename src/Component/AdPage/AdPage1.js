import "./AdPage.css";
import images from "../../image/images.jpg";
function AdPage1() {
  return (
    <div className="AdContainer">
      <div className="adAside"></div>
      {/* Left Main */}
      <div className="adLeftMain">
        <p>최정무입니다.</p>
        <p className="adDevelop">최정무입니다.</p>
        <span>
          <p>안녕하세요 저는 성장기 개발자 최정무입니다.</p>
          <p>성장의 기회를 얻기 위해 꿈을 키워나가겠습니다.</p>
        </span>
      </div>
      {/* Right Main */}
      <div className="adRightMain"></div>
    </div>
  );
}

export default AdPage1;
