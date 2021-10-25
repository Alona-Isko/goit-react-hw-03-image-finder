import { Component } from 'react';
// import { ReactComponent as SearchIcon } from '../../images/search.svg';
import s from './Searchbar.module.css';

class Searchbar extends Component {
    state = {
        query: '',
    };

    handleInputChange = e => {
        this.setState({ query: e.currentTarget.value.toLowerCase() });
    };

    handleSubmit = e => {
        e.preventDefault();

        this.props.onSubmit(this.state.query);
        this.setState({ query: '' });
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