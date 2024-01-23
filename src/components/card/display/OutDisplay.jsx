/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import Cards from '../Cards.jsx';
import ErrorBlock from '../Alert.jsx';
import Roulling from '../Spin.jsx';

class DisplayComponent extends Component {
  render() {
    const {
      isLoading, outOfSearch, error, movies, inputValue,
    } = this.props;

    if (outOfSearch) {
      return <ErrorBlock />;
    } if (isLoading) {
      return <Roulling />;
    } if (movies.length === 0) {
      return <ErrorBlock inputValue={inputValue} />;
    }
    return <Cards error={error} movies={movies} />;
  }
}

export default DisplayComponent;
