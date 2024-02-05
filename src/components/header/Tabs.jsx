/* eslint-disable arrow-body-style */
/* eslint-disable import/no-cycle */
/* eslint-disable react/prefer-stateless-function */
/* eslint-disable react/prop-types */
// SearchTab.jsx
import React, { Component } from 'react';
import Header from './Header.jsx';
import DisplayComponent from '../card/display/OutDisplay.jsx';
import Footer from '../footer/Footer.jsx';
import Cards from '../card/Cards.jsx';

export default class SearchTab extends Component {
  render() {
    const { searchData } = this.props;
    if (!searchData) {
      return 'NOT A SearchTab!!!';
    }
    const {
      checkedRating,
      setCheckedRating,
      inputValue,
      movies,
      error,
      isLoading,
      outOfSearch,
      totalPages,
      currentPage,
      handleInputChange,
      handlePageChange,
      handleRatingChange,
      getRatingForMovie,
      ratedMovies,
    } = searchData;
    return (
      <>
        <Header
          inputValue={inputValue}
          setCheckedRating={setCheckedRating}
          handleInputChange={handleInputChange}
        />
        <DisplayComponent
          isLoading={isLoading}
          outOfSearch={outOfSearch}
          error={error}
          movies={movies}
          inputValue={inputValue}
          checkedRating={checkedRating}
          handleRatingChange={handleRatingChange}
          ratedMovies={ratedMovies}
          getRatingForMovie={getRatingForMovie}
        />
        <Footer
          currentPage={currentPage}
          totalPages={totalPages}
          onPageChange={handlePageChange}
        />
      </>
    );
  }
}

export const RatedTab = ({ ratedMovies, handleRatingChange, getRatingForMovie }) => {
  if (!ratedMovies) {
    return null;
  }
  const ratedMoviesWithRating = ratedMovies.filter((movie) => movie.rating);
  if (ratedMoviesWithRating.length === 0) {
    return (
      <p>No rated movies yet.</p>
    );
  }

  return (
    <section className="rated-tab">
      <Cards
        movies={ratedMoviesWithRating}
        checkedRating
        handleRatingChange={handleRatingChange}
        getRatingForMovie={getRatingForMovie}
      />
    </section>
  );
};
