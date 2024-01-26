/* eslint-disable react/jsx-indent */
/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';

const NoMovies = ({ error }) => {
  return (
    <p>
      Фильмов нет
      {' '}
      {error}
    </p>
  );
};

NoMovies.propTypes = {
  error: PropTypes.string.isRequired,
};

export default NoMovies;
