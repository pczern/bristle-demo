import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { connect } from 'react-redux'
// Slides
import StartSlide from './slides/StartSlide'
import TopicSlide from './slides/TopicSlide'
import SubtopicSlide from './slides/SubtopicSlide'
import TimeSlide from './slides/TimeSlide'
import css from './index.scss'

class Intro extends Component {
  static propTypes = {
    currentSlide: PropTypes.number,
  }

  static defaultProps = {
    currentSlide: 0,
  }

  getCurrentSlide = (id) => {
    switch (id) {
      case 0: // Change to 0
        return <StartSlide />
      case 1: // Change to 1
        return <TopicSlide />
      case 2:
        return <SubtopicSlide />
      case 3:
        return <TimeSlide />
      default:
        return <StartSlide />
    }
  }

  render() {
    return <div className={css.intro}>{this.getCurrentSlide(this.props.currentSlide)}</div>
  }
}

const mapStateToProps = state => ({
  currentSlide: state.slides,
})

export default connect(mapStateToProps)(Intro)
