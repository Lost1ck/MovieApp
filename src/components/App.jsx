/* eslint-disable react/prop-types */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
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
      inputValue: 'return',
      movies: [],
      error: null,
      ratedMovies: [],
      currentTab: 'Rated',
      isLoading: true,
      outOfSearch: false,
      isOnline: navigator.onLine,
    };
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
      .then((movies) => {
        console.log('Запрос выполнен');
        this.setState({
          movies,
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
    this.setState({ inputValue });
  };

  handleInputKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.fetchData();
    }
  };

  handlePageChange = (page) => {
    this.fetchData(page);
  };

  handleNetworkChange = () => {
    this.setState({ isOnline: navigator.onLine });
  };

  render() {
    const {
      inputValue, movies, error, isLoading, outOfSearch, isOnline,
    } = this.state;
    return (
      <section className="app-container">
        {isOnline ? (
          <>
            <Header
              inputValue={inputValue}
              handleInputChange={this.handleInputChange}
              handleInputKeyDown={this.handleInputKeyDown}
            />
            <DisplayComponent
              isLoading={isLoading}
              outOfSearch={outOfSearch}
              error={error}
              movies={movies}
              inputValue={inputValue}
            />
            <Footer onPageChange={this.handlePageChange} />
          </>
        ) : (
          <NoInternetConnection isOnline={isOnline} />
        )}
      </section>
    );
  }
}

export default App;
