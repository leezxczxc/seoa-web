// src/pages/Main.js

import React from 'react';
import './Main.css';
import mainVideo from '../assets/baby-main.mp4'; 
import framePhoto from '../assets/main-frame.png'; 

function Main() {
  return (
    <div className="main-container">
      {/* 1. 비디오와 프레임을 겹치기 위한 컨테이너 */}
      <div className="main-photo-container">
        {/* 2. 비디오를 먼저 배치합니다. */}
        <video 
          src={mainVideo}
          className="baby-video" 
          autoPlay 
          loop 
          muted 
          playsInline
          title="아기 서아 영상"
        />
        {/* 3. 프레임 이미지를 덧씌울 별도의 div를 만듭니다. */}
        <div 
          className="photo-frame-overlay" 
          style={{ backgroundImage: `url(${framePhoto})` }}
        ></div>
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
