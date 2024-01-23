/* eslint-disable react/prop-types */
import React from 'react';

const Overview = ({ movie }) => {
  const maxLength = 120;
  if (movie.overview.length > maxLength) {
    const truncatedOverview = `${movie.overview.slice(0, maxLength)}...`;
    return <p style={{ textAlign: 'left', paddingTop: '10px' }}>{truncatedOverview}</p>;
  }
  return <p style={{ textAlign: 'left', paddingTop: '10px' }}>{movie.overview}</p>;
};

export default Overview;
