import React from 'react';
import PropTypes from 'prop-types';
import { Pagination } from 'antd';

const Footer = ({ currentPage, totalPages, onPageChange }) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <Pagination
      defaultCurrent={currentPage}
      total={totalPages}
      onChange={handlePageChange}
    />
  );
};

Footer.propTypes = {
  currentPage: PropTypes.number.isRequired,
  totalPages: PropTypes.number.isRequired,
  onPageChange: PropTypes.func.isRequired,
};

export default Footer;
