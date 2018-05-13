import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import Slide from '../../../components/Slide'
import { nextSlide } from '../../../actions'

const StartSlide = props => (
  <Slide>
    <div>
      Hallo
      <button onClick={() => props.dispatch(nextSlide())}>Next</button>
    </div>
    <div>Was geht ab</div>
  </Slide>
)

StartSlide.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(StartSlide)
