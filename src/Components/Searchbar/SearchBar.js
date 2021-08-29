import { Component } from "react";
import s from './searchBar.module.css'

class SearchBar extends Component {

    state = {
        searchInputValue: ''
    }

    formSubmit = (e) => {
        e.preventDefault();
        this.props.onSubmit(this.state.searchInputValue);
    };

     handleInputChange = (e) => {
        this.setState({ searchInputValue: e.currentTarget.value })
    }

    render() {
        return (
            <header className={ s.Searchbar }>
                <form className={ s.SearchForm } onSubmit={this.formSubmit}>
                    <button type="submit" className={ s.SearchFormButton }>
                        <span className={ s.SearchFormButtonLabel }>Search</span>
                    </button>

                    <input
                        className={ s.SearchFormInput }
                        type="text"
                        value={this.state.searchInputValue}
                        onChange={this.handleInputChange}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                    />
                </form>
            </header>
        );
    };
}

export default SearchBar;