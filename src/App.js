import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import fetchImages from './services/apiServer';
import s from './App.module.css';


class App extends Component {
  state = {
    query: '',
    page: 1,
    data: [],
    loading: false,
  }

  componentDidUpdate(prevProps, prevState) {
    // console.log("prev query: ", prevState.query);
    // console.log("new query: ", this.state.query);
    // console.log(this.state.page);
    if (prevState.query !== this.state.query) {
      this.getFetch();
    }
  };

  getFetch = () => {
    // this.setState({ loading: true });
    const { query, page } = this.state;

    return fetchImages(query, page)
      .then(data => {
        console.log("data: ", data);
        this.setState(prev => ({
          data: [...prev.data, ...data],
          page: prev.page + 1,
        }));
      })
      .catch(error => this.setState({ error }))
  };

  getSearchValue = query => this.setState({ query });


  onLoadMore = () => {
    this.getFetch()
      .then(() => {
        this.scrollLoadMore();
      });
  };

  scrollLoadMore = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };


  render() {
    return (
      <div className={s.App}>
        <Searchbar getSearchValue={this.getSearchValue} />
        <ToastContainer
          autoClose={3000}
        />
        <ImageGallery
          data={this.state.data}
        />

        {this.state.data.length > 0 && (
          <Button onClick={this.onLoadMore}/>
        )}
      </div>
    )
  }
}

export default App;
