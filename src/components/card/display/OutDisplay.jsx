/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Cards from '../Cards.jsx';
import { NotFound } from '../Alert.jsx';
import Roulling from '../Spin.jsx';

class DisplayComponent extends Component {
  render() {
    const {
      isLoading, outOfSearch,
      error, movies, inputValue, checkedRating, handleRatingChange,
      ratedMovies, getRatingForMovie,
    } = this.props;

    if (isLoading) {
      return <Roulling />;
    } if (outOfSearch || !movies || movies.length === 0) {
      return <NotFound inputValue={inputValue} />;
    }
    return (
      <Cards
        error={error}
        movies={movies}
        checkedRating={checkedRating}
        handleRatingChange={handleRatingChange}
        ratedMovies={ratedMovies}
        getRatingForMovie={getRatingForMovie}
      />
    );
  }
}

export default DisplayComponent;
