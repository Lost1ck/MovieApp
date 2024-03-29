/* eslint-disable react/no-unused-class-component-methods */
/* eslint-disable import/no-extraneous-dependencies */
/* eslint-disable react/no-unused-state */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import debounce from 'lodash/debounce';
import fetchMovies, { guestSession, askForPermissions } from './data/Data.jsx';
import { NoInternetConnection } from './card/Alert.jsx';
import SearchTab from './header/Tabs.jsx';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentPage: 1,
      totalPages: 0,
      inputValue: 'return',
      movies: [],
      ratedMovies: [],
      error: null,
      currentTab: 'Rated',
      isLoading: true,
      outOfSearch: false,
      isOnline: navigator.onLine,
      checkedRating: true,
    };
    this.debouncedFetchData = debounce(this.fetchData, 500);
  }

  componentDidMount() {
    window.addEventListener('online', this.handleNetworkChange);
    window.addEventListener('offline', this.handleNetworkChange);
    const ratedMovies = JSON.parse(localStorage.getItem('ratedMovies')) || [];
    this.setState({ ratedMovies });
    this.fetchData();
    guestSession();
    askForPermissions();
  }

  componentWillUnmount() {
    window.removeEventListener('online', this.handleNetworkChange);
    window.removeEventListener('offline', this.handleNetworkChange);
  }

  fetchData = (page = 1) => {
    if (page === undefined || page === null) {
      // console.error('Ошибка: значение page не указано.');
      return;
    }
    this.setState({ isLoading: true, outOfSearch: false });
    fetchMovies({ inputValue: this.state.inputValue, page })
      .then((data) => {
        // console.log(data.movies);
        this.setState({
          movies: data.movies,
          currentPage: page,
          totalPages: data.totalPages,
          isLoading: false,
        });
      })
      .catch((error) => {
        // console.error(error);
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

  setCheckedRating = (checked) => {
    this.setState({ checkedRating: checked });
  };

  handleRatingChange = (movie, newRating) => {
    const ratedMovies = JSON.parse(localStorage.getItem('ratedMovies')) || [];

    // Находим фильм в массиве
    const index = ratedMovies.findIndex((item) => item.id === movie.id);

    if (index !== -1) {
      // Обновляем рейтинг существующего фильма
      ratedMovies[index].rating = newRating;
    } else {
      // Добавляем новый фильм с рейтингом
      const ratedMovie = { ...movie, rating: newRating };
      ratedMovies.push(ratedMovie);
    }

    // Сохраняем обновленный список в localStorage
    localStorage.setItem('ratedMovies', JSON.stringify(ratedMovies));

    // Обновляем состояние
    this.setState({ ratedMovies });
  };

  getRatingForMovie = (movieId) => {
    const { ratedMovies } = this.state;
    const ratedMovie = ratedMovies.find((movie) => movie.id === movieId);
    return ratedMovie ? ratedMovie.rating : 0;
  };

  render() {
    const {
      inputValue, movies, error, isLoading, outOfSearch,
      isOnline, totalPages, currentPage, checkedRating, ratedMovies,
    } = this.state;
    console.log(ratedMovies);

    const searchData = {
      getRatingForMovie: this.getRatingForMovie,
      handleRatingChange: this.handleRatingChange,
      ratedMovies,
      checkedRating,
      setCheckedRating: this.setCheckedRating,
      inputValue,
      movies,
      error,
      isLoading,
      outOfSearch,
      totalPages,
      currentPage,
      handleInputChange: this.handleInputChange,
      handlePageChange: this.handlePageChange,
    };

    return (
      <section className="app-container">
        {isOnline ? (
          <SearchTab searchData={searchData} />
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
