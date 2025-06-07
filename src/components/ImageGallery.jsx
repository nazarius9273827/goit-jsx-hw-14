import ImageGalleryItem from './ImageGalleryItem';

export default function ImageGallery({ images, onClick }) {
  return (
    <ul className="gallery">
      {images.map(({ id, webformatURL, largeImageURL }) => (
        <ImageGalleryItem
          key={id}
          small={webformatURL}
          large={largeImageURL}
          onClick={onClick}
        />
      ))}
    </ul>
  );
}
