import React from 'react';
import { useSwipeable } from 'react-swipeable';
import './PhotoModal.css';

function PhotoModal({ isOpen, onClose, photos, currentIndex, setCurrentIndex }) {
  const handlers = useSwipeable({
    onSwipedLeft: () => goToNext(),
    onSwipedRight: () => goToPrevious(),
    preventDefaultTouchmoveEvent: true,
    trackMouse: true // 데스크탑에서 마우스로 드래그하는 것을 감지하는 옵션
  });

  const goToPrevious = () => {
    const isFirstPhoto = currentIndex === 0;
    const newIndex = isFirstPhoto ? photos.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
  };

  const goToNext = () => {
    const isLastPhoto = currentIndex === photos.length - 1;
    const newIndex = isLastPhoto ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
  };

  if (!isOpen) return null;

  return (
    <div className="modal-backdrop" onClick={onClose}>
      <div className="modal-content" onClick={(e) => e.stopPropagation()}>
        <button className="modal-close-button" onClick={onClose}>×</button>
        <button className="modal-nav-button prev" onClick={goToPrevious}>‹</button>
        
        <img
          src={photos[currentIndex].url}
          alt="enlarged"
          className="modal-photo"
          {...handlers}
        />

        <button className="modal-nav-button next" onClick={goToNext}>›</button>
      </div>
    </div>
  );
}

export default PhotoModal;