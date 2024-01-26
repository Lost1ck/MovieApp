import React from 'react';
import { Empty } from 'antd';

const Image = ({ movies, id }) => {
  const filteredMovies = movies.filter((movie) => movie.id === id);
  const movie = filteredMovies[0];

  const imageSrc = movie.poster_path !== null && movie.poster_path !== undefined
    ? `https://image.tmdb.org/t/p/original${movie.poster_path}`
    : null;

  const newImg = imageSrc !== null
    ? (
      <img
        key={movie.id}
        src={imageSrc}
        alt={movie.original_title}
      />
    )
    : <Empty description={false} style={{ backgroundColor: 'gray' }} />;

  return newImg;
};

export default Image;
