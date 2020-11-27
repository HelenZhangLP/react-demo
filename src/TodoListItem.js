import React, { Component } from 'react';
import './TodoItem.css';
import voteImg from "./vote.jpg";

/**
 * Error: Maximum update depth exceeded. 超过最大更新深度
          This can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate.
          React limits the number of nested updates to prevent infinite loops.

          因为 <button onClick={handleVote()}>{vote}</button> TodoList 里面的 setState 在初始化时列表次数调用引用。初始化列表代码时
          不要运行。
 */
// 定义函数无状态组件
export default function TodoItem(props) {
  const handleVote = () => {
    props.onVote(props.listItem.id)
  };
  // 对象解构赋值
  const { id, title, author, date, vote } = props.listItem

  return (
    <li className="item">
     <div className="title">{title}</div>
     <div>{author}</div>
     <div>{date}</div>
     <div className="vote">
       <span><img src={voteImg} onClick={handleVote} /></span>
       <span>{vote}</span>
     </div>
    </li>
  )
}
