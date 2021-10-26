import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './components/Searchbar/Searchbar';
// import ApiServer from './components/ApiServer/ApiServer';
// import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';

import './App.css';
import axios from "axios";

console.dir(axios);
const BASE_URL = `https://pixabay.com/api/`;
const API_KEY = `23238437-0207b31bcaea78a79b03733f3`;

axios.defaults.baseURL = BASE_URL;
// axios.defaults.headers.common.Authorization = API_KEY;

let searchQuery = "cat"
let curPage = 1

let params = `/?q=${searchQuery}&page=${curPage}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`;

axios.get(params)
  .then(res => {
    console.log(res);
  })
  .catch(error => {
    console.log(error);
  });



class App extends Component {
  state = {
    data: [],
    query: '',
  }

  handleFormSubmit = query => {
    this.setState({query});
}

  render() {
    return (
      <div>
        <Searchbar onSubmit={this.handleFormSubmit} />
        {/* <ApiServer query={this.state.query} /> */}
        <ToastContainer
          autoClose={3000}
        />
        {/* <ImageGalleryItem
          data={this.state.data}
        /> */}
      </div>
    )
  }
}

export default App;
