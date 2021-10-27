import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import Searchbar from './components/Searchbar/Searchbar';
import {ApiServer} from './services/apiServer';
// import ImageGalleryItem from './components/ImageGalleryItem/ImageGalleryItem';

import './App.css';
// import axios from "axios";

const BASE_URL = `https://pixabay.com/api/`;
const API_KEY = `23238437-0207b31bcaea78a79b03733f3`;
const newApiServer = new ApiServer(BASE_URL, API_KEY);

//===========


//===========

class App extends Component {
  state = {
    // data: [],
    query: '',
    queryResult: [],
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      newApiServer.searchQuery = this.state.query;
      newApiServer.searchImages()
        .then(queryResult => {
          console.log(queryResult);
          this.setState({ queryResult });
        }) 
    }
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
