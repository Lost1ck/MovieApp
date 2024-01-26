/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import PropTypes from 'prop-types';
import {
  Flex, Rate, Typography, Row, Col, Card,
} from 'antd';
import Image from './img/Img.jsx';
import Overview from './Overview.jsx';
import MovieGenres from './FindGenre.jsx';

class Cards extends Component {
  render() {
    const { movies } = this.props;
    function getRatingClassName(voteAverage) {
      return voteAverage.toFixed(1) > 7 ? 'high' : 'low';
    }
    function formatDate(releaseDate) {
      if (!releaseDate) return '';
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      return new Date(releaseDate).toLocaleDateString('en-US', options);
    }
    return (
      <section className="flex stable-font">
        {Array.isArray(movies) && movies.map((movie) => (
          <Card
            className="card"
            key={movie.id}
          >
            <Row
              gutter={24}
              className="card__row"
              key={movie.id}
            >
              <Col span={12}>
                <Image
                  justify-content="space-between"
                  movies={movies}
                  id={movie.id}
                  className="card__image"
                />
              </Col>
              <Col
                span={12}
                className="card__box"
              >
                <Flex>
                  <Typography
                    className="box_header"
                  >
                    {movie.original_title}
                  </Typography>
                  <div>
                    <p className={`card__rate ${getRatingClassName(movie.vote_average)}`}>
                      {(movie.vote_average).toFixed(1)}
                    </p>
                  </div>
                </Flex>
                <div className="card__release-date">
                  <p className="card__color-text">{formatDate(movie.release_date)}</p>
                </div>
                <div className="card__movie-gerne">
                  <MovieGenres movieGen={movie.genre_ids} />
                </div>
                <Overview movie={movie} />
                <Rate className="card__stars" allowHalf defaultValue={0.5} count={10} />
              </Col>
            </Row>
          </Card>
        ))}
      </section>
    );
  }
}

Cards.propTypes = {
  movies: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number.isRequired,
      original_title: PropTypes.string.isRequired,
      vote_average: PropTypes.number.isRequired,
      release_date: PropTypes.string,
      genre_ids: PropTypes.arrayOf(PropTypes.number),
    }),
  ).isRequired,
};

export default Cards;
