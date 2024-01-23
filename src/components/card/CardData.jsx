/* eslint-disable import/no-named-as-default */
import React, { Component } from 'react';
import { Col, Row } from 'antd';
import NoMovies from './CardError.jsx';
import Cards from './Cards.jsx';

class CardData extends Component {
  constructor(props) {
    super(props);
    this.state = {
      movies: [],
      error: null,
    };
  }

  render() {
    const { movies, error } = this.state;
    return (
      <Row>
        <Col span={24}>
          {error ? (
            <NoMovies errors={error} />
          ) : (
            <Cards movies={movies} error={error} />
          )}
        </Col>
      </Row>
    );
  }
}

export default CardData;
