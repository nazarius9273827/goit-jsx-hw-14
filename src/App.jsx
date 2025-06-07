import React, { Component } from 'react';
import Searchbar from './components/Searchbar';
import ImageGallery from './components/ImageGallery';
import Loader from './components/Loader';
import Button from './components/Button';
import Modal from './components/Modal';
import './styles.css';

const API_KEY = '47475037-a019c47be6692940311d6755b';
const PER_PAGE = 12;

class App extends Component {
  state = {
    query: '',
    images: [],
    page: 1,
    loading: false,
    showModal: false,
    largeImageURL: '',
  };

  componentDidUpdate(prevProps, prevState) {
    const { query, page } = this.state;

    if (prevState.query !== query || prevState.page !== page) {
      this.fetchImages(query, page);
    }
  }

  fetchImages = (query, page) => {
    this.setState({ loading: true });

    fetch(
      `https://pixabay.com/api/?q=${query}&page=${page}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=${PER_PAGE}`
    )
      .then(res => res.json())
      .then(data => {
        this.setState(prevState => ({
          images: [...prevState.images, ...data.hits],
        }));
      })
      .catch(error => console.error(error))
      .finally(() => this.setState({ loading: false }));
  };

  handleSubmit = query => {
    this.setState({ query, images: [], page: 1 });
  };

  handleLoadMore = () => {
    this.setState(prev => ({ page: prev.page + 1 }));
  };

  openModal = url => {
    this.setState({ largeImageURL: url, showModal: true });
  };

  closeModal = () => {
    this.setState({ showModal: false, largeImageURL: '' });
  };

  render() {
    const { images, loading, showModal, largeImageURL } = this.state;

    return (
      <div>
        <Searchbar onSubmit={this.handleSubmit} />
        <ImageGallery images={images} onClick={this.openModal} />
        {loading && <Loader />}
        {images.length >= PER_PAGE && !loading && (
          <Button onClick={this.handleLoadMore} />
        )}
        {showModal && (
          <Modal onClose={this.closeModal} image={largeImageURL} />
        )}
      </div>
    );
  }
}

export default App;
