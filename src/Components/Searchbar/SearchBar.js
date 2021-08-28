import { Component } from "react";
import s from './searchBar.module.css'

class SearchBar extends Component {
    render() {
        return (
            <header className={ s.Searchbar }>
                <form className={ s.SearchForm }>
                    <button type="submit" className={ s.SearchFormButton }>
                        <span className={ s.SearchFormButtonLabel }>Search</span>
                    </button>

                    <input
                        className={ s.SearchFormInput }
                        type="text"
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