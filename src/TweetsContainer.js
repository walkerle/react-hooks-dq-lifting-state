import React, { Component } from 'react'
import TweetList from './TweetList'
import UserList from './UserList'
import { users } from './data/data'

class TweetsContainer extends Component {
  state = {
    users: users
  }

  render() {
    console.log("In TweetsContainer, state is", this.state)
    return (
      <div className="ui main container">
        <div className="ui grid">
          <div className="six wide column">
            <h2 className="ui header">Users</h2>
            <UserList users={this.state.users} />
          </div>
          <div className="ten wide column">
            <h2 className="ui header">Tweets</h2>
            <TweetList user={this.state.users[0]} />
          </div>
        </div>
      </div>
    )
  }
}

export default TweetsContainer