import React from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
// import {ApiServer} from '../../services/apiServer';
import s from './ImageGallery.module.css';


export default function ImageGallery({ data }) {
    return (
        <ul className={s.ImageGallery}>
            {data.map(image => {
                return (
                    <ImageGalleryItem
                        key={image.id}
                        image={image}
                    />
                )
            })}
        </ul>
    );
};
