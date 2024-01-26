/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import Header from './header/Header.jsx';
import fetchMovies from './data/Data.jsx';
import Footer from './footer/Footer.jsx';
import DisplayComponent from './card/display/OutDisplay.jsx';
import { NoInternetConnection } from './card/Alert.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      totalPages: 0,
      inputValue: 'return',
      movies: [],
      error: null,
      ratedMovies: [],
      currentTab: 'Rated',
      isLoading: true,
      outOfSearch: false,
      isOnline: navigator.onLine,
    };
    this.debouncedFetchData = debounce(this.fetchData, 500);
  }

  componentDidMount() {
    window.addEventListener('online', this.handleNetworkChange);
    window.addEventListener('offline', this.handleNetworkChange);
    this.fetchData();
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleNetworkChange);
    window.removeEventListener('offline', this.handleNetworkChange);
  }

  fetchData = (page = 1) => {
    if (page === undefined || page === null) {
      console.error('Ошибка: значение page не указано.');
      return;
    }
    this.setState({ isLoading: true, outOfSearch: false });
    fetchMovies({ inputValue: this.state.inputValue, page })
      .then((data) => {
        console.log(data.movies);
        this.setState({
          movies: data.movies,
          currentPage: page,
          totalPages: data.totalPages,
          isLoading: false,
        });
      })
      .catch((error) => {
        console.error(error);
        this.setState({
          error: error.message,
          isLoading: false,
          outOfSearch: true,
        });
      });
  };

  handleInputChange = (inputValue) => {
    this.setState({ inputValue }, () => {
      this.debouncedFetchData();
    });
  };

  handlePageChange = (page) => {
    this.fetchData(page);
  };

  handleNetworkChange = () => {
    this.setState({ isOnline: navigator.onLine });
  };

  render() {
    const {
      inputValue, movies, error, isLoading, outOfSearch, isOnline, totalPages, currentPage,
    } = this.state;

    return (
      <section className="app-container">
        {isOnline ? (
          <>
            <Header
              inputValue={inputValue}
              handleInputChange={this.handleInputChange}
            />
            <DisplayComponent
              isLoading={isLoading}
              outOfSearch={outOfSearch}
              error={error}
              movies={movies}
              inputValue={inputValue}
            />
            <Footer
              currentPage={currentPage}
              totalPages={totalPages}
              onPageChange={this.handlePageChange}
            />
          </>
        ) : (
          <NoInternetConnection isOnline={isOnline} />
        )}
      </section>
    );
  }
}

App.defaultProps = {
  inputValue: 'return',
  movies: [],
  error: null,
  isLoading: true,
  outOfSearch: false,
  isOnline: navigator.onLine,
  totalPages: 0,
  currentPage: 1,
};

export default App;
