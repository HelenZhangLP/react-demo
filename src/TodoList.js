import React from 'react';
import TodoItem from './TodoListItem';

/**
 * 组件样式引入有两种方式：
 * 1. HTML（public/index.html） 页面标签引入 <link rel="stylesheet" src="./style.css">
      应用于整个应用的所有组件，一般是基础样式
 * 2. 样式表文件当作一个模块引入，使用样式表的组件中 import './TodoList.css';
      引入当前模块只作用于当前组件，相当于私有样式
      全局样式也可通过 import 引用入口 js 文件
 */
import './TodoList.css';

/**
 * 定义 react 组件 TodoList
 * class 定义组件两个条件
 * 1. class 继承自 React.Component
 * 2. calss 内部定义 render 方法，render 方法返回代表该组件的 UI React 元素
 */

 /**
  * react 使用 props、state 两种类型的数据驱动渲染出组件 UI
  * props 组件对外接口，组件通过 props 接收外部数据方法，props 是只读属性，不能在组件内部修改 props
  * state 组件对内接口，组件内部变化通过 state 反映
  * 组件状态的修改通过 state 完成
  */

/**
 * 有状态组件和无状态组件
 * 无状态组件：一个组件内部状态不变，不需要用到 state
 *  无状态组件可以 class 组件定义，也可以函数组件定义，比起类组件，函数组件更加简洁。
 *  无状态组件不用关心状态变化，只聚集于 UI 展示，易复用。
 *  无状态组件完成页面绝大部分 UI 渲染工作。
 * 有状态组件：一个组件内部状态变化，需要 state 保存变化，当前组件 TodoList 为有状态组件
 */

 /**
  * React 应用组件设计思路
  * 无状态组件接收 props 的传参并关注UI渲染，尽可能多的应用无状态组件，少数有状态组件关注业务变化
  */
class TodoList extends React.Component {
  /**
   * constructor 初始化组件的 state，绑定事件处理
   */
  constructor(props) {
    //super(props) 用于调用 React.Component 的 constructor 方法，用来完成 React 组件的初始化工作，只时保证组件 props 传入组件
    super(props);
    // this.state 定义组件的状态
    this.state = {
      list: [],
    }
    this.timer = null; // 用于模拟服务返回数据
    this.handleVote = this.handleVote.bind(this)
  }

  componentDidMount() {
    this.timer = setTimeout(()=>{
      this.setState({
        list: [
          {id: 0, title: '大家来一起讨论 react 吧', author: 'zlp1', date: '2020-2-18 10:22:00', vote: 0},
          {id: 1, title: '前端框架你最爱哪一个', author: 'zlp2', date: '2020-2-18 10:24:00', vote: 0},
          {id: 2, title: 'Web App 时代已经到来', author: 'zlp3', date: '2020-2-18 10:25:00', vote: 0},
        ],
      })
    }, 1000)
  }

  componentWillUnmount() {
    // 清除定时器
    if(this.timer) {
      clearTimeout(this.timer)
    }
  }

  handleVote(id) {
    let list = [];
    list = this.state.list.map(item => {
      let newItem = item.id === id ? {...item, vote: item.vote++} : item
      return item;
    })
    // // setState 唯一改变组件状态的方式
    this.setState({
      list
    })
  }

  render() {
    {/* this.handleVote.bind(this) 手动绑定 this 对象 */}
    {/**
        index.js:1 Warning: Each child in a list should have a unique "key" prop.
        用 key 来标记每个元素，列表发生变化时，通过 key 知道哪些元素发生变化，从而重新渲染发生变化的元素，提高渲染效率
        不要用 index 索引作 key，因为一旦数据列表重排，索引也会发生变化，不利于渲染优化。
        key 值的唯一性只针对当前列表。不是针对全局的
    */}
    return (
      <div className="container">
        <ul>
          { this.state.list.map(item =>
            <TodoItem
              key = {item.id}
              listItem = { item }
              onVote = { this.handleVote } />)
          }
        </ul>
      </div>
    );
  }
}

// 组件 TodoList 作为默认模块导出
export default TodoList;
