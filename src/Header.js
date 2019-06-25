import React, { Component } from 'react'
import Logo from './Logo'
import Menu from './Menu'

export default class Header extends Component {
  state = {
    darkMode: false
  }

  render() {
    return (
      <div className={`ui fixed menu ${this.state.darkMode ? "inverted" : ""}`}>
        <Logo />
        <div className="right menu">
          <Menu />
        </div>
      </div>
    )
  }
}
