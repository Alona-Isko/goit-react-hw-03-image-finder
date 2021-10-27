import { Component } from 'react';
import ImageGalleryItem from '../ImageGalleryItem/ImageGalleryItem';
import {ApiServer} from '../../services/apiServer';
import s from './ImageGallery.module.css';

const BASE_URL = `https://pixabay.com/api/`;
const API_KEY = `23238437-0207b31bcaea78a79b03733f3`;
const newApiServer = new ApiServer(BASE_URL, API_KEY);

class ImageGallery extends Component {
    state = {
        data: [],
    };
    
    componentDidUpdate(prevProps, prevState) {
            if (prevProps.query !== this.props.query) {
                console.log(`get fetch`);
                newApiServer.searchQuery = this.props.query;
                newApiServer.searchImages()
                    .then(data => {
                        console.log(data);
                        this.setState({ data });
                    });
            }
    }

    render() {
        return (
            <ul className={s.ImageGallery}>
                {this.state.data.map(image => {
                    return (
                        <ImageGalleryItem
                            key={image.id}
                            image={image}
                        />
                    )
                })}
            </ul>
        );
    }
};

export default ImageGallery;