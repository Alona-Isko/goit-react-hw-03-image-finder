import s from './ImageGalleryItem.module.css';

export default function ImageGalleryItem({ image }) {
    return (
        <li key={image.id} className={s.ImageGalleryItem}>
            <img
                src={image.webformatURL}
                alt={image.tags}
                className={s.ImageGalleryItem__image}
            />
        </li>
    );
};
