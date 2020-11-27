
## react 基础
### 定义组件的两个条件：
1.  class 必须继承自 React.Component
2.  class 内部定义 render 方法，返回代表该组件的 UI。render 是定义组件时的唯一必要方法。

### 组件的 props 和 state
react 使用 props、state 两种类型的数据驱动渲染组件 UI
props 组件对外接口，组件通过 props 接收数据、方法，props 只读，不能在组件内部修改 props
state 组件对内接口，组件内部变化通过 state 反映，组件状态通过 setState 修改。

### 有状态组件和无状态组件
无状态组件：
* 一个组件内部状态不变，不需要用到 state
* 无状态组件可以用 class 定义，也可以用函数定义，比起类组件，函数组件更加简洁，如下代码(draft-1 分支)
```javascript
import React, { Component } from 'react';
import './TodoItem.css';
import voteImg from "./vote.jpg";

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
```
* 无状态组件不用关心状态变化，只聚集于 UI 展示，易利用
* 无状态组件完成页面的绝大部分的 UI 渲染工作。
有状态组件：
一个组件内部状态变化，需要 state 保存状态变化
> react 应用组件设计思路，无状态组件接收 props 传参，只需要关注 UI 渲染，尽可能多的使用无状态组件，简洁且易利用。有状态组件关注业务变化。用少数有状态组件管理无状态组件。

### 受控表单和非受控表单


## Each child in a list should have a unique "key" prop.
key 是用来标记每个元素的，当列表更新时，元素通过 key 知道每个哪些元素发生了变化，进而渲染发生变化的元素，提高渲染效率
不要 index 索引作 key，因为一旦数据列表发生重排，索引也会发生变化，不利于渲染优化
key 值唯一只针对当前列表，不是针对全局。

## Error: Maximum update depth exceeded, this can happen when a component repeatedly calls setState inside componentWillUpdate or componentDidUpdate. react limits the number of nested updates to prevent infinite loops
因为 `<button onClick={handleVote()}>{vote}</button>` TodoList 里面的 setState 在初始化时列表次数调用引用。初始化列表代码时不要运行。
