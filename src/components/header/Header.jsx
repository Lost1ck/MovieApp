/* eslint-disable react/prop-types */
/* eslint-disable import/no-cycle */
/* eslint-disable prefer-destructuring */
/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Divider, Input, Button } from 'antd';
import {
  BrowserRouter as Router, Routes, Route, Link,
} from 'react-router-dom';
import SearchTab, { RatedTab } from './Tabs.jsx';

const Header = ({ inputValue, handleInputChange, setCheckedRating }) => {
  const handleCheckedRatingF = () => {
    setCheckedRating(true);
  };

  const handleCheckedRatingT = () => {
    setCheckedRating(false);
  };
  return (
    <>
      <Router>
        <Link to="/search">
          <Button className="header__btns" onClick={handleCheckedRatingF}>Search</Button>
        </Link>
        <Link to="/rated">
          <Button className="header__btns" onClick={handleCheckedRatingT}>Rated</Button>
        </Link>
        <Routes>
          <Route path="/search" element={<SearchTab />} />
          <Route path="/rated" element={<RatedTab />} />
        </Routes>
      </Router>
      <Divider />
      <Input
        placeholder="Type to search..."
        value={inputValue}
        onChange={(e) => {
          handleInputChange(e.target.value);
        }}
      />
    </>
  );
};

Header.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default Header;
