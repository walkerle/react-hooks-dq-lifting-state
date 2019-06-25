import React, { Component } from 'react'
import TweetList from './TweetList'
import UserList from './UserList'
import { users } from './data/data'

export default class TweetsContainer extends Component {
  state = {
    users: users,
    selectedUserId: 1
  }

  getUser() {
    return this.state.users.find(user => user.id === this.state.selectedUserId)
  }

  handleUserClick = selectedUserId => this.setState({ selectedUserId })

  // we need update a nested piece of state (tweets) so this is a little tricky!
  handleTweetLike = tweetId => {
    this.setState(prevState => {
      const updatedUsers = prevState.users.map(user => {
        // check if the user matches selected user in state
        if (user.id === prevState.selectedUserId) {
          // map through the user's tweets and update the favorite_count count for the tweet with the ID we passed through
          const updatedTweets = user.tweets.map(tweet => tweet.id === tweetId ? { ...tweet, favorite_count: tweet.favorite_count + 1 } : tweet)
          return {
            ...user,
            tweets: updatedTweets
          }
        } else {
          return user
        }
      })
      // setState must return new state
      return {
        users: updatedUsers
      }
    })
  }

  render() {
    return (
      <div className="ui main container">
        <div className="ui grid">
          <div className="six wide column">
            <h2 className="ui header">Users</h2>
            <UserList handleUserClick={this.handleUserClick} users={this.state.users} />
          </div>
          <div className="ten wide column">
            <h2 className="ui header">Tweets</h2>
            <TweetList handleTweetLike={this.handleTweetLike} user={this.getUser()} />
          </div>
        </div>
      </div>
    )
  }
}
