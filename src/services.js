
const API_KEY = '23129863-59f8a41eed57593cb3097b5c2'
const URL = 'https://pixabay.com/api/'

export default function fetchPictures() {
    this.setState({status: 'pending'})
    fetch(`${URL}?q=${this.state.query}&page=${this.state.pageNumber}&key=${API_KEY}&image_type=photo&orientation=horizontal&per_page=12`)
      .then(res => res.json())
      .then(pictures => this.setState(prevState => ({
        pictures: [...prevState.pictures, ...pictures.hits],
        status: 'resolved'
      })))
    .catch(error => this.setState({ error, status: 'rejected' }));
};