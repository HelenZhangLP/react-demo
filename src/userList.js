import React, {Component} from 'react'

class UserList extends Component {
  modifyName(event) {
    const { value } = event.target
     this.props.handleName(value)
   }
  // 返回代表该组件的 ui react 元素
  render() {
    const { users = [] } = this.props;
    return [
        users.map(item => (
          <div key={item.key}>
            <input value={item.name} onChange={this.modifyName.bind(this)} />
          </div>
        ))
    ]
  }
}

export default UserList
