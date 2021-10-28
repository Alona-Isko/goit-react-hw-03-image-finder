import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import s from './ImageGallery.module.css';


export default function ImageGallery({ data, onImageClick}) {
    return (
        <ul className={s.ImageGallery}>
            {data.map(image => {
                return (
                    <ImageGalleryItem
                        key={image.id}
                        image={image}
                        onImageClick={onImageClick}
                    />
                )
            })}
        </ul>
    );
};
