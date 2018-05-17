import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { nextSlide } from '../../../../actions'
import Slide from '../../../../components/Slide'
import css from './index.scss'
// Universal slide styles
import { leftPanel, rightPanel, panelGuide } from '../../index.scss'

const TopicSlide = props => (
  <Slide className={css.TopicSlide__modifier}>
    <div className={leftPanel}>
      <div className={panelGuide}>
        <h2 className={css.topicInfo__header}>
          Begin by selecting <i>Polynomials and Nonlinear Functions</i> as your topic.
        </h2>
        <button
          className={css.StartSlide__button}
          onClick={() => props.dispatch(nextSlide())}
        >Continue
        </button>
      </div>
    </div>
    <div className={rightPanel} />
  </Slide>
)

TopicSlide.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(TopicSlide)
