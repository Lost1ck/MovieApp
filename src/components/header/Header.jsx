/* eslint-disable prefer-destructuring */
/* eslint-disable arrow-body-style */
import React from 'react';
import PropTypes from 'prop-types';
import { Button, Divider, Input } from 'antd';

const Header = ({ inputValue, handleInputChange }) => {
  return (
    <header>
      <div>
        <Button className="header__btns">Search</Button>
        <Button className="header__btns">Rated</Button>
      </div>
      <Divider />
      <div>
        <Input
          placeholder="Type to search..."
          value={inputValue}
          onChange={(e) => {
            handleInputChange(e.target.value);
          }}
        />
      </div>
    </header>
  );
};

Header.propTypes = {
  inputValue: PropTypes.string.isRequired,
  handleInputChange: PropTypes.func.isRequired,
};

export default Header;
