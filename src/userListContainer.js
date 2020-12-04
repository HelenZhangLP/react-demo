import React, { Component } from 'react';
import UserList from './userList';
import {getUsers} from './api/index'


export default class UserListContainer extends Component {
  constructor(props){
    super(props)
    this.state = {
      users: [],
      currentUserId: null
    }
  }

  handleName(name) {
    // 调用修改用户信息接口
    // console.log(name)
  }

  handleCurrentUser(currentUserId) {
    this.setState({
      currentUserId
    })
  }

  componentDidMount() {
    getUsers()
    .then(res => {
      this.setState({
        users: res
      })
    })
  }

  render() {
    const user = this.state.users.filter(item => item.id === currentUserId)
    return (
      <UserList users={this.state.users} />
      currentUserId && <UserDetial user = { user } />
    )
  }
}
