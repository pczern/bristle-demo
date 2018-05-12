import React, { Component } from 'react'
// Intro
import Intro from '../intro/Intro'

class App extends Component {
  state = {
    isLoading: true,
  }
  render() {
    if (this.state.isLoading) {
      setTimeout(() => {
        this.setState({ isLoading: false })
      }, 100)
      return null
    }

    return (
      <div className="App">
        <Intro />
      </div>
    )
  }
}

export default App
