import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
// import {ApiServer} from './services/apiServer';
import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';

import './App.css';
// import axios from "axios";


class App extends Component {
  state = {
    query: '',
    data: [],
  }

  componentDidUpdate(prevProps, prevState) {
    // if (prevState.query !== this.state.query) {
    //   console.log(`s`);
        
    // }
  }

  getSearchValue = query => this.setState({ query });

  render() {
    return (
      <div>
        <Searchbar getSearchValue={this.getSearchValue} />
        <ToastContainer
          autoClose={3000}
        />
        <ImageGallery
          query={this.state.query}
          data={this.state.data}
        />
      </div>
    )
  }
}

export default App;
