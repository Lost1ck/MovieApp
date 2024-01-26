/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
import React, { Component } from 'react';
import { Tabs } from 'antd';

export default class TopTabs extends Component {
  handleTabChange = (key) => {
    this.props.onTabChange(key); // Передача измененной вкладки наверх в родительский компонент
  };

  render() {
    const { currentTabKey } = this.props;
    const items = [
      {
        key: '1',
        label: 'Tab 1',
        children: 'Content of Tab Pane 1',
      },
      {
        key: '2',
        label: 'Tab 2',
        children: 'Content of Tab Pane 2',
      },
    ];
    return (
      <Tabs
        activeKey={currentTabKey}
        onChange={this.handleTabChange} // Обработчик изменения вкладки
        items={items}
      />
    );
  }
}
