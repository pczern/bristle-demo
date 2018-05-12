import React, { Component } from 'react'
import StartSlide from './StartSlide'
import css from './index.scss'

class Intro extends Component {
  state = {}
  render() {
    return (
      <div className={css.intro}>
        <StartSlide />
      </div>
    )
  }
}

export default Intro
