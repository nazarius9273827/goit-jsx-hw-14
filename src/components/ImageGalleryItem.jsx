export default function ImageGalleryItem({ small, large, onClick }) {
  return (
    <li className="gallery-item" onClick={() => onClick(large)}>
      <img src={small} alt="" />
    </li>
  );
}
