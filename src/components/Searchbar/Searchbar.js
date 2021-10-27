import { Component } from 'react';
import { toast } from 'react-toastify';
// import { ReactComponent as SearchIcon } from '../../images/search.svg';
import s from './Searchbar.module.css';
// import { ApiServer } from '../ApiServer/ApiServer';

// const BASE_URL = 'https://pixabay.com/api/';
// const API_KEY = '23238437-0207b31bcaea78a79b03733f3';
// const newApiServer = new ApiServer(BASE_URL, API_KEY);
// console.log(newApiServer.searchImages());

class Searchbar extends Component {
    state = {
        query: '',
    };

    // componentDidUpdate(prevProps, prevState) {
    //     if (prevState.query !== this.state.query) {
    //         newApiServer.searchQuery = this.state.query;
    //         newApiServer.searchImages();
    //     }
    // }

    handleSubmit = e => {
        e.preventDefault();

        // console.log(this.state.query);
        if (this.state.query.trim() === '') {
            toast('Your query is empty');
            return;
        }
        
        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
    };

    handleInputChange = e => {
        this.setState({ query: e.target.value.toLowerCase() });
    };

    
    render() {
        return (
            <header className={s.Searchbar}>
                <form
                    onSubmit={this.handleSubmit}
                    className={s.SearchForm}
                >
                    <button type="submit" className={s.SearchFormButton}>
                        <span className={s.SearchFormButton__label}>Search</span>
                    </button>

                    <input
                        className={s.SearchForm__input}
                        type="text"
                        value={this.state.query}
                        autoComplete="off"
                        autoFocus
                        placeholder="Search images and photos"
                        onChange={this.handleInputChange}
                    />
                </form>
            </header>
        )
    }
};

export default Searchbar;