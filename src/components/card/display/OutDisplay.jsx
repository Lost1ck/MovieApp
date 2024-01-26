/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import Cards from '../Cards.jsx';
import { NotFound } from '../Alert.jsx';
import Roulling from '../Spin.jsx';

class DisplayComponent extends Component {
  render() {
    const {
      isLoading, outOfSearch, error, movies, inputValue,
    } = this.props;

    if (isLoading) {
      return <Roulling />;
    } if (outOfSearch || movies.length === 0) {
      return <NotFound inputValue={inputValue} />;
    }
    return <Cards error={error} movies={movies} />;
  }
}

DisplayComponent.propTypes = {
  isLoading: PropTypes.bool.isRequired,
  outOfSearch: PropTypes.bool.isRequired,
  error: PropTypes.string,
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      release_date: PropTypes.string,
      genre_ids: PropTypes.arrayOf(PropTypes.number),
    }),
  ).isRequired,
  inputValue: PropTypes.string,
};

DisplayComponent.defaultProps = {
  error: null,
  inputValue: '',
};

export default DisplayComponent;
