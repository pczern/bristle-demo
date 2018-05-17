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
          Begin by selecting <i>Factoring and Polynomials</i> as your topic.
        </h2>
        <button
          className={css.topicInfo__continue}
          onClick={() => props.dispatch(nextSlide())}
        >Continue
        </button>
      </div>
    </div>
    <div className={rightPanel}>
      <div className={css.TopicSlide__topic}>
        <h3 className={css.TopicSlide__topic_header}>Algebra 1 Topics</h3>
        <ul className={css.TopicSlide__topic_list}>
          <li>Expressions, equations and functions</li>
          <li>Real numbers</li>
          <li>Solving linear equations</li>
          <li>Linear functions</li>
          <li>Linear equations</li>
          <li>Linear inequalitites</li>
          <li>Systems of linear equations and inequalities</li>
          <li>Exponents and exponential functions</li>
          <li>Factoring and polynomials</li>
          <li>Quadratic equations</li>
          <li>Radical expressions</li>
          <li>Rational expressions</li>
        </ul>
      </div>
    </div>
  </Slide>
)

TopicSlide.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(TopicSlide)
