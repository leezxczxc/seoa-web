import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css'; // index.css는 보통 폰트나 기본적인 배경색 등 전역 스타일을 위해 남겨둡니다.
import App from './App';

const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);