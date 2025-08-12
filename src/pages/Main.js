import React from 'react';
import './Main.css'; // 방금 만든 CSS 파일을 가져옵니다.

// public 폴더에 저장할 대표 이미지 파일 이름입니다.
const mainPhoto = '/main-baby.jpg'; 

function Main() {
  return (
    <div className="main-container">
      {/* 대표 사진 */}
      <div className="main-photo">
        <img src={mainPhoto} alt="대표 이미지" />
      </div>

      {/* 환영 문구 */}
      <div className="main-text">
        <h2>초대합니다</h2>
        <h1>서아의 첫 번째 생일</h1>
        <p>2026년 8월 22일 토요일, 오후 12:00</p>
      </div>

      <div className="welcome-message">
        <p>
          사랑으로 자라난 서아의 첫 돌,<br />
          소중한 분들을 모시고 조촐한 잔치를 열고자 합니다.<br />
          귀한 걸음 하시어 자리를 빛내주시길 바랍니다.
        </p>
      </div>
    </div>
  );
}

export default Main;