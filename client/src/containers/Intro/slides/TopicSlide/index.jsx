import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import update from 'immutability-helper'
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
      topics: {
        data: [
          { id: 0, name: 'Expressions, equations and functions' },
          { id: 1, name: 'Real numbers' },
          { id: 2, name: 'Solving linear equations' },
          { id: 3, name: 'Linear functions' },
          { id: 4, name: 'Factoring and polynomials' },
          { id: 5, name: 'Linear equations' },
          { id: 6, name: 'Linear inequalitites' },
          { id: 7, name: 'Systems of linear equations and inequalities' },
          { id: 8, name: 'Exponents and exponential functions' },
          { id: 9, name: 'Quadratic equations' },
          { id: 10, name: 'Radical expressions' },
          { id: 11, name: 'Rational expressions' },
        ],
        maxSelectable: 3,
        currentlySelected: 0, // count of how many are selected
      },
    }
  }

  selectTopic = (id) => {
    if (this.state.topics.currentlySelected < this.state.topics.maxSelectable) {
      this.setState((state) => {
        const newTopics = update(state.topics, {
          data: { [id]: { selected: { $set: true } } },
        })
        newTopics.currentlySelected = state.topics.currentlySelected + 1
        return { topics: newTopics }
      })
    }
  }

  unselectTopic = (id) => {
    this.setState((state) => {
      const newTopics = update(state.topics, {
        data: { [id]: { selected: { $set: false } } },
      })
      newTopics.currentlySelected = state.topics.currentlySelected - 1
      return { topics: newTopics }
    })
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
            >
              Continue
            </button>
          </div>
        </div>
        <div className={rightPanel}>
          <div className={css.topicslide__topics}>
            <h3 className={css.topicslide__topics__header}>Algebra 1 Topics</h3>
            <ul className={css.topicslide__topics__list}>
              {this.state.topics.data.map(topic => (
                <li key={topic.id}>
                  <Topic
                    id={topic.id}
                    selected={!!topic.selected}
                    onSelect={this.selectTopic}
                    onUnselect={this.unselectTopic}
                  >
                    {topic.name}
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
