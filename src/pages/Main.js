import React from 'react';
import './Main.css'; // 방금 만든 CSS 파일을 가져옵니다.

function Main() {
  return (
    <div className="main-container">
      {/* 대표 사진 */}
      <div className="main-photo">
        <img src='https://lh3.googleusercontent.com/pw/AP1GczNFo9gGfJ4DMS1J_K5PIB5O3NNaF_5kr7IxE9oNp1VO_S5KECokNSDgSs5OY9nYlwsBTnAVH_HqS4lPbUiDut8bkly8vlFSSi8fW9TNyfUKijQEaWekGGSPzAejWaST5FQ5ewu7xIUhY2wuy8KSmKNv5A=w1080-h721-s-no-gm?authuser=0' alt="대표 이미지" />
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