import React, { Component } from 'react'

class App extends Component {
  state = {
    isLoading: true
  }
  render() {
    if (this.state.isLoading) {
      setTimeout(() => {
        this.setState({ isLoading: false })
      }, 100)
      return null
    }

    return <div className="App">Hallo Welt</div>
  }
}

export default App
