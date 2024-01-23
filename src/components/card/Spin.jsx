import React from 'react';
import { LoadingOutlined } from '@ant-design/icons';
import { Spin } from 'antd';

const Roulling = () => (
  <Spin
    indicator={(
      <LoadingOutlined
        style={{
          fontSize: 36,
        }}
        spin
      />
    )}
  />
);

export default Roulling;
