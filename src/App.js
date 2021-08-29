import { Component } from 'react';
import './App.css';
import SearchBar from './Components/Searchbar/SearchBar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Button from './Components/Button/Button';
import Modal from './Components/Modal/Modal'


class App extends Component {
  state = {
    pictures: null,
    status: 'idle',
    showModal: false,
    largePicture: null,
    requiredItem: '',
    pageNumber: 2
  };

  setRequiredItem = (requiredItem) => {
    this.setState({ requiredItem })
  };

  setPageNumber = () => {
    this.setState(prevState => ({pageNumber: prevState.pageNumber + 1}))
  }

  findLargeImgSrc = (id) => {
    const obj = this.state.pictures.find(picture => picture.id === id)
    this.setState({largePicture: obj})
  }

  toggleModal = () => {
    this.setState(prevState => ({
      showModal: !prevState.showModal
    }))
  }

  firstFetch = (requiredItem) => {
    fetch(`https://pixabay.com/api/?q=${requiredItem}&page=1&key=23129863-59f8a41eed57593cb3097b5c2&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.json())
      .then(pictures => this.setState({
        pictures: pictures.hits
      }));
  }

  fetchForMorePictures = () => {
    fetch(`https://pixabay.com/api/?q=${this.state.requiredItem}&page=${this.state.pageNumber}&key=23129863-59f8a41eed57593cb3097b5c2&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.json())
      .then(pictures => this.setState(prevState => ({
        pictures: [...prevState.pictures, ...pictures.hits]
      })));
    this.setPageNumber();
  };

  onSubmit = (requiredItem) => {
    this.setRequiredItem(requiredItem)
    this.firstFetch(requiredItem)
    
  };

  render() {

    return (
      <div className='container'>
        <SearchBar onSubmit={this.onSubmit} />
        {this.state.showModal && <Modal closeModal={this.toggleModal} pictureData={this.state.largePicture} />}
        {this.state.pictures && <ImageGallery pictures={this.state.pictures} openModal={this.toggleModal} findLargeImgSrc={this.findLargeImgSrc }/>}
        {this.state.pictures && <Button fetchForMorePictures={this.fetchForMorePictures} />}
      </div>
      
    )
  }
}

export default App;