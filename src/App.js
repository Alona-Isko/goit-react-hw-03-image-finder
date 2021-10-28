import React, { Component } from 'react';
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

import Searchbar from './components/Searchbar/Searchbar';
import ImageGallery from './components/ImageGallery/ImageGallery';
import Button from './components/Button/Button';
import fetchImages from './services/apiServer';
import Modal from './components/Modal/Modal';
import Loader from './components/Loader/Loader';
import s from './App.module.css';


class App extends Component {
  state = {
    query: '',
    page: 1,
    data: [],
    showModal: false,
    largeImageURL: '',
    loading: false,
  }

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query) {
      this.getFetch();
    }
  };

  getFetch = () => {
    const { query, page } = this.state;
    this.setState({ loading: true });

    return fetchImages(query, page)
      .then(data => {
        console.log("data: ", data);
        this.setState(prev => ({
          data: [...prev.data, ...data],
          page: prev.page + 1,
        }));
      })
      .catch(error => this.setState({ error }))
      .finally(() => this.setState({ loading: false }));
  };

  getSearchValue = query => this.setState({
    query,
    page: 1,
    data: [],
  });


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


  openModalClick = largeImageURL => {
    this.setState({
      largeImageURL: largeImageURL,
      showModal: true,
    });
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal,
      largeImageURL: '',
    }));
  };


  render() {
    const { data, loading, showModal, largeImageURL} = this.state;
    return (
      <div className={s.App}>
        <Searchbar getSearchValue={this.getSearchValue} />
        <ToastContainer
          autoClose={3000}
        />
        <ImageGallery
          data={data}
          onImageClick={this.openModalClick}
        />
        {loading && <Loader />}
        {data.length > 0 && data.length >= 12 && (
          <Button onClick={this.onLoadMore}/>
        )}
        {showModal && (
          <Modal
            onClose={this.toggleModal}
            largeImageURL={largeImageURL}
          />)}
      </div>
    )
  }
}

export default App;
