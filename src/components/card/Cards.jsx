/* eslint-disable react/prop-types */
import React, { Component } from 'react';
import {
  Flex, Rate, Typography, Row, Col, Card,
} from 'antd';
import Image from './Img.jsx';
import Overview from './Overview.jsx';
import MovieGenres from './FindGenre.jsx';

class Cards extends Component {
  render() {
    const { movies } = this.props;
    function getRatingClassName(voteAverage) {
      return voteAverage.toFixed(1) > 7 ? 'high' : 'low';
    }
    function formatDate() {
      const options = { year: 'numeric', month: 'long', day: 'numeric' };
      const date = new Date();
      return date.toLocaleDateString('en-US', options);
    }
    console.log(movies);
    return (
      <section className="flex stable-font">
        {movies.map((movie) => (
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

export default Cards;
