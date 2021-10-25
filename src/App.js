import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import Searchbar from './components/Searchbar/Searchbar';
import './App.css';

class App extends Component {
  state = {
    query: '',
  }

  handleFormSubmit = query => {
    this.setState({query});
}

  render() {
    return (
      <>
        <Searchbar onSubmit={this.handleFormSubmit} />
        <ToastContainer />
      </>
    )
  }
}

export default App;
