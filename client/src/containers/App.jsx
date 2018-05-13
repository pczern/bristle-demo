import React, { Component } from 'react'
// Intro
import Intro from './Intro'
import Assignment from './Assignment'

class App extends Component {
  state = {
    introFinished: false,
  }

  render() {
    if (this.state.introFinished) {
      return <Assignment />
    }

    return (
      <div className="App">
        <Intro />
      </div>
    )
  }
}

export default App
