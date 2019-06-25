import React, { Component } from 'react'
import Header from './Header'
import TweetsContainer from './TweetsContainer'

export default class App extends Component {
  render() {
    return (
      <div id="wrapper" className={""/* dark-mode */}>
        <Header />
        <TweetsContainer />
      </div>
    )
  }
}
