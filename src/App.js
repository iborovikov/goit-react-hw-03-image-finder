import { Component } from 'react';
import Loader from "react-loader-spinner";
import './App.css';
import fetchPictures from './services';
import SearchBar from './Components/Searchbar/SearchBar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Button from './Components/Button/Button';
import Modal from './Components/Modal/Modal'


class App extends Component {
  state = {
    pictures: [],
    status: 'idle',
    showModal: false,
    largeImg: null,
    query: '',
    pageNumber: 1,
    error: 'Nothing found'
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.query !== this.state.query || prevState.pageNumber !== this.state.pageNumber) {
      fetchPictures.call(this)
    };
    if (this.state.pageNumber > 1) {
      this.scrollDown();
    };
  };

  scrollDown = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  setPageNumber = () => {
    this.setState(prevState => ({ pageNumber: prevState.pageNumber + 1 }));
  };

  openLargeImg = (id) => {
    const picture = this.state.pictures.find(picture => picture.id === id);
    this.setState({ largeImg: picture})
    this.toggleModal();
  
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };

  onSubmit = (query) => {
    this.setState({
      pictures: [],
      pageNumber: 1,
      query
    });
  };

  render() {

    const { status, pictures, showModal, largeImg, error } = this.state
    const { onSubmit, toggleModal, openLargeImg, setPageNumber} = this

    if (status === 'idle') {
      return (<div className='container'>
        <SearchBar onSubmit={onSubmit} />
      </div>);
    };

    if (status === 'pending') {
      return (
        <div className='container'>
          <SearchBar onSubmit={onSubmit} />
          <ImageGallery pictures={pictures} openLargeImg={openLargeImg} />
          <div className='loader'>
            <Loader type="ThreeDots" color="#3f51b5" height={80} width={80} />
          </div>
        </div>
      );
    };

    if (status === 'resolved') {
      return (
        <div className='container'>
          <SearchBar onSubmit={onSubmit} />
          {<ImageGallery pictures={pictures} openLargeImg={openLargeImg} />}
          {<Button setPageNumber={setPageNumber} />}
          {showModal && <Modal closeModal={toggleModal} pictureData={largeImg} />}
        </div>
        
      );
    };

    if (status === 'rejected') {
      return (<div className='container'>
        <SearchBar onSubmit={onSubmit} />
        <h1>Warning: { error }</h1>
      </div>);
    };
  };
};

export default App;