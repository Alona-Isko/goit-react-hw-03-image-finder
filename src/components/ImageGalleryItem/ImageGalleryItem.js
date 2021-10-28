import PropTypes from 'prop-types';
import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ key, image, onImageClick }) {
    return (
        <li key={image.id} className={s.ImageGalleryItem}>
            <img
                src={image.webformatURL}
                alt={image.tags}
                key={key}
                className={s.ImageGalleryItem__image}
                onClick={() => onImageClick(image.largeImageURL)}
            />
        </li>
    );
};

ImageGalleryItem.propType = {
  image: PropTypes.shape({
    webformatURL: PropTypes.string,
    largeImageURL: PropTypes.string,
    tags: PropTypes.string,
  }),
  onImageClick: PropTypes.func,
};