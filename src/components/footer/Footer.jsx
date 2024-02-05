/* eslint-disable react/prop-types */
import React from 'react';
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

export default Footer;
