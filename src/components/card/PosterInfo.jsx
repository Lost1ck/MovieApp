/* eslint-disable react/prop-types */
/* eslint-disable react/jsx-no-undef */
/* eslint-disable no-undef */
import React from 'react';
import { Card, Flex } from 'antd';

const PosterInfo = ({ movies }) => (
  <>
    {movies.map((movie) => (
      <Card
        bodyStyle={{
          padding: 0,
          display: 'flex',
        }}
        span={16}
        key={movie.id}
        style={{ display: 'flex' }}
      >
        {movie.poster_path === null
          ? <img className="movie-null movie-poster card__row" alt="" />
          : <img className="movie-poster" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="" /> }
        <Flex
          className="card__wrapper"
          vertical
        >
          <div className="flex">
            <h2>{movie.name}</h2>
            <div className="card__rate">3</div>
          </div>
          <p>{movie.runtime}</p>
          <p>{movie.overview}</p>
        </Flex>
      </Card>
    ))}
  </>
);
export default PosterInfo;
