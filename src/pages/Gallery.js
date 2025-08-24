import React, { useState } from 'react';
import { allPhotos } from '../data/photoData'; 
import PhotoModal from '../components/PhotoModal';
import './Gallery.css';

function Gallery() {
  const [modalIsOpen, setModalIsOpen] = useState(false);
  const [currentPhotoIndex, setCurrentPhotoIndex] = useState(0);

  // 사진을 클릭했을 때 모달을 여는 함수
  const openModal = (index) => {
    setCurrentPhotoIndex(index);
    setModalIsOpen(true);
  };

  // 모달을 닫는 함수
  const closeModal = () => {
    setModalIsOpen(false);
  };

  return (
    <div className="gallery-container">
      {/* 1. 제목(h2)을 div로 감싸고, 별 아이콘을 위한 span을 추가합니다. */}
      <div className="gallery-title-container">
        <span className="star-icon">✨</span>
        <h2>Our Memories</h2>
      </div>
      {/* 기존 photo-grid를 그대로 사용합니다. */}
      <div className="photo-grid">
        {allPhotos.map((photo, index) => (
          <div key={photo.id} className="photo-item" onClick={() => openModal(index)}>
            <img src={photo.url} alt={`memory ${index + 1}`} />
          </div>
        ))}
      </div>

      {/* 모달 컴포넌트 추가 */}
      <PhotoModal
        isOpen={modalIsOpen}
        onClose={closeModal}
        photos={allPhotos}
        currentIndex={currentPhotoIndex}
        setCurrentIndex={setCurrentPhotoIndex}
      />
    </div>
  );
}

export default Gallery;