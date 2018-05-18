import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { nextSlide } from '../../../../actions'
import Slide from '../../../../components/Slide'
import Topic from '../../../../components/Topic'
import css from './index.scss'
// Universal slide styles
import { leftPanel, rightPanel, panelGuide } from '../../index.scss'

class TopicSlide extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      topicSelected: false,
      topics: [
        'Expressions, equations and functions',
        'Real numbers',
        'Solving linear equations',
        'Linear functions',
        'Factoring and polynomials',
        'Linear equations',
        'Linear inequalitites',
        'Systems of linear equations and inequalities',
        'Exponents and exponential functions',
        'Quadratic equations',
        'Radical expressions',
        'Rational expressions',
      ],
    }
  }

  selectTopic = () => {
    if (this.state.topicSelected) {
      this.setState({ topicSelected: false })
    } else {
      this.setState({ topicSelected: true })
    }
  }

  render() {
    return (
      <Slide className={css.topicslide}>
        <div className={leftPanel}>
          <div className={panelGuide}>
            <h2 className={css.topicslide__info__header}>
              Begin by selecting <i>Factoring and Polynomials</i> as your topic.
            </h2>
            <button
              className={css.topicslide__info__continue}
              onClick={() => this.props.dispatch(nextSlide())}
            >Continue
            </button>
          </div>
        </div>
        <div className={rightPanel}>
          <div className={css.topicslide__topics}>
            <h3 className={css.topicslide__topics__header}>Algebra 1 Topics</h3>
            <ul className={css.topicslide__topics__list}>
              {this.state.topics.map(topic => (
                <li key={`${topic}1`}>
                  <Topic
                    topicSelected={this.state.topicSelected}
                    onClick={this.selectTopic}
                  >{topic}
                  </Topic>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Slide>
    )
  }
}

TopicSlide.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(TopicSlide)
