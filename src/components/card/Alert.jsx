/* eslint-disable react/prop-types */
/* eslint-disable react/prefer-stateless-function */
import React, { Component } from 'react';
import { Alert, Space } from 'antd';

class ErrorBlock extends Component {
  render() {
    const { inputValue, isOnline } = this.props;
    return (
      <Space
        direction="vertical"
        style={{
          width: '100%',
        }}
      >
        {isOnline ? (
          <Alert
            message={`'${inputValue}' не найден `}
            description="Error Description Error Description Error Description Error Description Error Description Error Description"
            type="error"
            closable
          />
        ) : (
          <Alert
            message="Отсутствует подключение к интерету"
            description="Error Description Error Description Error Description Error Description Error Description Error Description Error Description Error Description Error Description Error Description Error Description Error Description"
            type="error"
            closable
          />
        )}
      </Space>
    );
  }
}

export default ErrorBlock;
