import { Component } from 'react';
import { toast } from 'react-toastify';
// import { ReactComponent as SearchIcon } from '../../images/search.svg';
import s from './Searchbar.module.css';

class Searchbar extends Component {
    state = {
        query: '',
    };

    handleSubmit = e => {
        e.preventDefault();

        if (this.state.query.trim() === '') {
            toast('Your query is empty');
            return;
        }

        // this.setState({ query: '' });
        this.props.getSearchValue(this.state.query);
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