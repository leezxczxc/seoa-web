import React from 'react';
import './Location.css';

// 1단계에서 준비한 지도 이미지와 링크를 여기에 넣어주세요.
const mapImage = '/map-image.png'; // public 폴더에 있는 이미지 경로
const mapLink = '여기에_카카오맵_공유_URL을_붙여넣으세요';

function Location() {
  return (
    <div className="location-container">
      <h2>오시는 길</h2>

      {/* 이미지를 클릭하면 mapLink로 이동하는 링크 */}
      <a href={mapLink} target="_blank" rel="noopener noreferrer">
        <img src={mapImage} alt="행사장 위치 지도" className="map-image" />
      </a>

      <div className="location-info">
        <p className="venue-name">OOO 웨딩홀 OOO홀</p>
        <p className="address">서울특별시 강남구 테헤란로 123</p>
        <p className="phone-number">02-123-4567</p>
        <p className="notice">
          지도를 클릭하시면 카카오맵으로 연결되어<br/>
          빠르게 길안내를 받으실 수 있습니다.
        </p>
      </div>
    </div>
  );
}

export default Location;