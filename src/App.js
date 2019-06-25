import React, { Component } from 'react'
import Header from './Header'
import TweetsContainer from './TweetsContainer'

export default class App extends Component {
  state = {
    darkMode: false
  }

  handleToggle = () => this.setState(prevState => ({ darkMode: !prevState.darkMode }))

  render() {
    return (
      <div className={this.state.darkMode ? "dark-mode" : ""}>
        <Header darkMode={this.state.darkMode} handleToggle={this.handleToggle} />
        <TweetsContainer />
      </div>
    )
  }
}
