import React, { useState } from 'react';
import { albums } from '../data/photoData'; // 1단계에서 만든 데이터 가져오기
import './Gallery.css';

function Gallery() {
  // 어떤 앨범이 선택되었는지 기억하는 변수입니다.
  // 처음에는 아무것도 선택되지 않았으므로 null 입니다.
  const [selectedAlbum, setSelectedAlbum] = useState(null);

  // 앨범을 클릭했을 때 실행될 함수
  const handleAlbumClick = (album) => {
    setSelectedAlbum(album);
  };

  // '뒤로가기' 버튼을 눌렀을 때 실행될 함수
  const handleBackClick = () => {
    setSelectedAlbum(null);
  };

  // 만약 선택된 앨범이 있다면, 그 앨범의 사진들을 보여줍니다.
  if (selectedAlbum) {
    return (
      <div className="gallery-container">
        <button onClick={handleBackClick} className="back-button">
          &larr; 앨범 목록으로
        </button>
        <h2>{selectedAlbum.title}</h2>
        <div className="photo-grid">
          {selectedAlbum.photos.map((photo) => (
            <div key={photo.id} className="photo-item">
              <img src={photo.url} alt={`${selectedAlbum.title} 사진`} />
            </div>
          ))}
        </div>
      </div>
    );
  }

  // 선택된 앨범이 없다면, 전체 앨범 목록을 보여줍니다.
  return (
    <div className="gallery-container">
      <h2>Photo Album</h2>
      <div className="album-grid">
        {albums.map((album) => (
          <div
            key={album.id}
            className="album-item"
            onClick={() => handleAlbumClick(album)}
          >
            <img src={album.thumbnail} alt={album.title} />
            <div className="album-title">{album.title}</div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Gallery;