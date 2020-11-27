import React from 'react';
// react-dom 完成组件所代表的需拟 DOM 节点到 DOM 节点转换器
import ReactDOM from 'react-dom';
import './index.css';
import TodoList from './TodoList';

// ReactDOM 将组件 TodoList 挂载到 页面的 DOM 节点上
ReactDOM.render(
  <React.StrictMode>
    <TodoList />
  </React.StrictMode>,
  document.getElementById('root')
);
