import { useEffect } from 'react';

export default function Modal({ image, onClose }) {
  useEffect(() => {
    const handleKey = e => e.code === 'Escape' && onClose();
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  const handleBackdrop = e => {
    if (e.currentTarget === e.target) onClose();
  };

  return (
    <div className="overlay" onClick={handleBackdrop}>
      <div className="modal">
        <img src={image} alt="" />
      </div>
    </div>
  );
}
