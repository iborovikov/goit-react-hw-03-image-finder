import { Component } from 'react';
import Loader from "react-loader-spinner";
import './App.css';
import SearchBar from './Components/Searchbar/SearchBar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Button from './Components/Button/Button';
import Modal from './Components/Modal/Modal'

const KEY = '23129863-59f8a41eed57593cb3097b5c2'

class App extends Component {
  state = {
    pictures: null,
    status: 'idle',
    showModal: false,
    largePicture: null,
    requiredItem: '',
    pageNumber: 2,
    error: null
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.pictures !== this.state.pictures) {
      window.scrollTo({
        top: document.documentElement.scrollHeight,
        behavior: 'smooth',
      });
    };
  };

  setStatus(status) {
    this.setState({ status });
  };

  setRequiredItem = (requiredItem) => {
    this.setState({ requiredItem });
  };

  setPageNumber = () => {
    this.setState(prevState => ({ pageNumber: prevState.pageNumber + 1 }));
  };

  findLargeImgSrc = (id) => {
    const picture = this.state.pictures.find(picture => picture.id === id);
    this.setState({ largePicture: picture });
  };

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }));
  };

  firstFetch = (requiredItem) => {
    fetch(`https://pixabay.com/api/?q=${requiredItem}&page=1&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.json())
      .then(pictures => this.setState({ pictures: pictures.hits, status: 'resolved' }))
      .catch(error => this.setState({ error, status: 'rejected' }));
  };

  fetchForMorePictures = () => {
    this.setStatus('pending')
    fetch(`https://pixabay.com/api/?q=${this.state.requiredItem}&page=${this.state.pageNumber}&key=${KEY}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.json())
      .then(pictures => this.setState(prevState => ({
        pictures: [...prevState.pictures, ...pictures.hits],
        status: 'resolved'
      })))
      .catch(error => this.setState({error, status: 'rejected'}));
    this.setPageNumber();
  };

  onSubmit = (requiredItem) => {
    this.setRequiredItem(requiredItem);
    this.firstFetch(requiredItem);
  };

  render() {

    const { status, pictures, showModal, largePicture, error } = this.state
    const { onSubmit, toggleModal, findLargeImgSrc, fetchForMorePictures} = this

    if (status === 'idle') {
      return (<div className='container'>
        <SearchBar onSubmit={onSubmit} />
      </div>);
    };

    if (status === 'pending') {
      return (
        <div className='container'>
          <SearchBar onSubmit={onSubmit} />
          <ImageGallery pictures={pictures} openModal={toggleModal} findLargeImgSrc={findLargeImgSrc} />
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
          {<ImageGallery pictures={pictures} openModal={toggleModal} findLargeImgSrc={findLargeImgSrc} />}
          {<Button fetchForMorePictures={fetchForMorePictures} />}
          {showModal && <Modal closeModal={toggleModal} pictureData={largePicture} />}
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