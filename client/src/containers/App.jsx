import React, { Component } from 'react'
// Intro
import Intro from '../intro'

class App extends Component {
  constructor() {
    super()

    this.state = {
      isLoading: true,
    }
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
