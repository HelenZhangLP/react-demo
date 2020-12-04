import React from 'react';
// react-dom 完成组件所代表的需拟 DOM 节点到 DOM 节点转换器
import ReactDOM from 'react-dom';
import ListContainer from './userListContainer';
import mock from './mock/index'

mock.start();
// ReactDOM 将组件 ListContainer 挂载到 页面的 DOM 节点上
ReactDOM.render(
  <React.StrictMode>
    <ListContainer />
  </React.StrictMode>,
  document.getElementById('root')
);
