// src/pages/Main.js

import React from 'react';
import './Main.css';
import mainVideo from '../assets/baby-main.mp4'; 
import crownFrame from '../assets/crown-with-arrow-frame.png'; 
import infoBox from '../assets/info-box.png';

function Main() {
  return (
    <div className="main-container">

      {/* 2. 비디오와 프레임 오버레이만 남겨 구조를 단순화합니다. */}
      <div 
        className="main-photo-container"
      >
        <video 
          src={mainVideo}
          className="baby-video" 
          autoPlay 
          loop 
          muted 
          playsInline
          title="아기 서아 영상"
        />
        <div 
          className="photo-frame-overlay" 
          style={{ backgroundImage: `url(${crownFrame})` }}
        ></div>
      </div>
      
      {/* 3. 정보 텍스트를 별도의 div로 분리하여 프레임 아래에 배치합니다. */}
      <div 
        className="info-box-container"
        style={{ backgroundImage: `url(${infoBox})` }}
      >
        <div className="info-box-text">
          <h1>First Birthday</h1>
          <p className="date-text">2025. 09. 21. 일요일 오후 12:00</p>
          <p className="location-text">롯데시티호텔 명동 씨카페</p>
        </div>
      </div>

      {/* 기존 환영 문구는 그대로 유지합니다. */}
      <div className="welcome-message">
        <p>
          햇살처럼 자라온 서아,
          <br />
          사랑의 시간들이 모여 첫 돌을 맞이합니다.
          <br />
          함께해 주신다면 큰 축복이 되겠습니다.
        </p>
      </div>
    </div>
  );
}

export default Main;
