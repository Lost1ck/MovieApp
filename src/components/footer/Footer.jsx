/* eslint-disable react/prop-types */
import React from 'react';
import { Pagination } from 'antd';

const Footer = ({ onPageChange, totalPages }) => {
  const handlePageChange = (page) => {
    onPageChange(page);
  };

  return (
    <Pagination
      defaultCurrent={1}
      total={totalPages}
      onChange={handlePageChange}
    />
  );
};

export default Footer;
