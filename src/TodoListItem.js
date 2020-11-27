import React, { Component } from 'react';
import './TodoItem.css';
import voteImg from "./images/vote.jpg";
import saveImg from "./images/save.jpg";
import editImg from "./images/edit.jpg";

/**
 * 加需求，修改每个帖子列表的枾
 *
 * 需要将状态组件修改为有状态的组件
 */

// 用 class 定义有状态组件
export default class TodoItem extends Component {
  /**
   * 创建组件时，首先调用组件的构造方法。
   * 参数 props 接收从父组件中传入数据对象。
   * 必须在组件中调用 super(props) 才能保证 props 传入了组件。
   * constructor(props) 通常用于初始化组件 state 以及 绑定事件的处理方法等
   */
  constructor(props) {
    super(props)
    this.state = {
      editing: false,
      item: props.listItem
    };
    this.handleEdit = this.handleEdit.bind(this)
  }

  /**
   * react 事件处理（3）
   * 属性初始化语法处理（property initializer syntax）
   * ES7 的 property initializer syntax 会自动为 class 中定义的方法绑定 this
   * 以下箭头函数 == property initializer syntax
   */
  handleVote = () => {
    this.props.onVote(this.props.listItem.id)
  };

  handleTitle(event) {
    const {target} = event;
    const item = {...this.state.item, title: target.value}

    this.setState({
      item
    })
  }

  handleEdit() {
    const {editing} = this.state
    this.setState({
      editing: !editing
    })
  }

  handleSave = () => {
    const {editing, item} = this.state
    this.props.onSave(item)
    // console.log(this.getFormateDate())
    this.setState({
      editing: !editing
    })
  }

  /**
   * render 定义组件时的唯一必要方法
   * 该方法根据 props 和 state 返回一个 react 元素，用于描述 UI 元素
   * react 并不负责渲染，只返回 UI jsx 的语法描述，而真正渲染的 DOM 由 react 负责
   * react 是一个纯函数，不能在 render 里 setState 改变组件状态
   */
  render() {
    // 对象解构赋值
    const { id, title, author, date, vote } = this.state.item
    const { editing } = this.state
    return (
      <li className="item">
        {
          editing ? <form>
            <span><textarea value={title} onChange={this.handleTitle.bind(this)} /></span>
            <span style={{verticalAlign: 'bottom'}}>
              <img src={saveImg} onClick={this.handleSave} className="ml5" style={{display: 'inline',verticalAlign: 'baseline'}} />
            </span>
          </form> :
          <div className="title">
            <span>{title}</span>
            <span><img src={editImg} onClick={this.handleEdit} className="ml5" /></span>
            </div>
        }
       <div>{author}</div>
       <div>{date}</div>
       <div className="vote">
         <span><img src={voteImg} onClick={this.handleVote} /></span>
         <span className="ml5">{vote}</span>
       </div>
      </li>
    )
  }
}
