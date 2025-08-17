import React from 'react';
import './Location.css';

// 카카오맵에서 공유한 최종 링크와 이미지 주소
const mapImageSrc = "http://t1.daumcdn.net/roughmap/imgmap/b541f14a171f2e84e9adf886a3fe33ccce11187def15f9bf4ff7785e05e90a58";
const mapLink = "https://map.kakao.com/?urlX=497356.9999999977&urlY=1129837.9999999993&itemId=26784273&q=%EB%A1%AF%EB%8D%B0%EC%8B%9C%ED%8B%B0%ED%98%B8%ED%85%94%20%EB%AA%85%EB%8F%99&srcid=26784273&map_type=TYPE_MAP&from=roughmap";
const roadviewLink = "https://map.kakao.com/?from=roughmap&srcid=26784273&confirmid=26784273&q=%EB%A1%AF%EB%8D%B0%EC%8B%9C%ED%8B%B0%ED%98%B8%ED%85%94%20%EB%AA%85%EB%8F%99&rv=on";
const directionsLink = "https://map.kakao.com/?from=roughmap&eName=%EB%A1%AF%EB%8D%B0%EC%8B%9C%ED%8B%B0%ED%98%B8%ED%85%94%20%EB%AA%85%EB%8F%99&eX=497356.9999999977&eY=1129837.9999999993";

function Location() {
  return (
    <div className="location-section">
      <div className="location-header">
        <h2>오시는 길</h2>
        <p className="venue-address">서울 중구 삼일대로 362 (롯데시티호텔 명동)</p>
      </div>

      <div className="map-image-container">
        <a href={mapLink} target="_blank" rel="noopener noreferrer">
          <img className="map-image" src={mapImageSrc} alt="롯데시티호텔 명동 위치 지도" />
        </a>
        <div className="map-footer">
          <a href="https://map.kakao.com" target="_blank" rel="noopener noreferrer" className="kakao-logo">
            <img src="//t1.daumcdn.net/localimg/localimages/07/2018/pc/common/logo_kakaomap.png" alt="카카오맵" />
          </a>
          <div className="map-footer-links">
            <a href={roadviewLink} target="_blank" rel="noopener noreferrer">로드뷰</a>
            <span className="link-divider"></span>
            <a href={directionsLink} target="_blank" rel="noopener noreferrer">길찾기</a>
            <span className="link-divider"></span>
            <a href={mapLink} target="_blank" rel="noopener noreferrer">지도 크게 보기</a>
          </div>
        </div>
      </div>

      <div className="transport-info">
        <div className="transport-method">
          <h3>🚇 지하철</h3>
          <p>
            <strong>2, 3호선 을지로3가역</strong> 1번 출구에서 도보 4분
          </p>
        </div>
        <div className="transport-method">
          <h3>🚗 주차 안내</h3>
          <p>호텔 지하주차장 이용 가능 (유료)</p>
          <p>최초 30분 3,000원 / 추가 10분당 1,000원</p>
          <p>만차일 경우, 인근 공영주차장을 이용해 주시기 바랍니다.</p>
        </div>
      </div>
    </div>
  );
}

export default Location;