import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { nextSlide } from '../../../../actions'
import css from './index.scss'
import { panelGuide } from '../../index.scss'

const StartSlide = props => (
  <div className={css.startslide}>
    <div className={panelGuide}>
      <h2 className={css.startslide__header}>Meet Bristle</h2>
      <p className={css.startslide__subhead}>Create intelligent classroom assignments</p>
      <button
        className={css.startslide__button}
        onClick={() => props.dispatch(nextSlide())}
      >Create Assignment
      </button>
    </div>
  </div>
)

StartSlide.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(StartSlide)
