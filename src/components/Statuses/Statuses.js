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
        status: 'init', // INIT
    };
    
    componentDidUpdate(prevProps, prevState) {
            if (prevProps.query !== this.props.query) {
                console.log(`get fetch`);
                this.setState({ status: 'pending' });   //PENDING
                newApiServer.searchQuery = this.props.query;
                newApiServer.searchImages()
                    .then(data => {
                        console.log(data);
                        this.setState({ data, status: 'success' }); //SUCCESS
                    })
                    .catch(error => {
                        this.setState({ status: 'error' }); //ERROR
                    });
            }
    }

    render() {
        if (this.state.status === 'init') { //INIT
            return (
                <h1>Hello!</h1>
            )
        }
        if (this.state.status === 'pending') { //PENDING
            return (
                <h2>Loading...</h2>
            )
        }
        if (this.state.status === 'success') {  //SUCCESS
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
        if (this.state.status === 'error') { //ERROR
            return (
                <h2>ERROR!</h2>
            )
        }
    }
};

export default ImageGallery;