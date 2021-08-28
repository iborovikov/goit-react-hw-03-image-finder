import { Component } from 'react';
import './App.css';
import SearchBar from './Components/Searchbar/SearchBar';
import ImageGallery from './Components/ImageGallery/ImageGallery';
import Button from './Components/Button/Button';

class App extends Component {
  render() {
    return (
      <div className='container'>
        <SearchBar />
        <ImageGallery />
        <Button />
      </div>
      
    )
  }
}

export default App;
