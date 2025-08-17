import React from 'react';
import './Main.css';
import mainPhoto from '../assets/main-baby.png';
// 1. 새로운 프레임 이미지를 import 합니다.
import framePhoto from '../assets/doodle-frame.png'; 

function Main() {
  return (
    <div className="main-container">
      <div className="main-photo-container">
        <div 
          className="photo-frame" 
          style={{ backgroundImage: `url(${framePhoto})` }}
        >
          <img src={mainPhoto} alt="대표 이미지" className="baby-photo-inside" />
        </div>
      </div>

      <div className="main-text">
        <h2>초대합니다</h2>
        <h1>서아의 첫 번째 생일</h1>
        <p>2025년 9월 21일 일요일, 오후 12:00</p>
      </div>

      <div className="welcome-message">
        <p>
          사랑으로 자라난 서아의 첫 돌,
          <br />
          소중한 분들을 모시고 조촐한 잔치를 열고자 합니다.
          <br />
          귀한 걸음 하시어 자리를 빛내주시길 바랍니다.
        </p>
      </div>
    </div>
  );
}

export default Main;
