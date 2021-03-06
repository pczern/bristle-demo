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
          { id: 0, name: 'Solving Equations', highlight: false },
          { id: 1, name: 'Solving Inequalities', highlight: false },
          { id: 2, name: 'Working with Units', highlight: false },
          { id: 3, name: 'Linear Equations & Graphs', highlight: false },
          { id: 4, name: 'Functions', highlight: false },
          { id: 5, name: 'Linear Word Problems', highlight: false },
          { id: 6, name: 'Sequences', highlight: false },
          { id: 7, name: 'Systems of Equations', highlight: false },
          { id: 8, name: 'Inequalities (Systems & Graphs)', highlight: false },
          { id: 9, name: 'Absolute Value & Piecewise Functions', highlight: false },
          { id: 10, name: 'Rational Exponents & Radicals', highlight: false },
          { id: 11, name: 'Exponential Growth & Decay', highlight: false },
          { id: 12, name: 'Polynomials', highlight: true },
          { id: 13, name: 'Factorization', highlight: false },
          { id: 14, name: 'Quadratics', highlight: false },
          { id: 15, name: 'Irrational Numbers', highlight: false },
        ],
        maxSelectable: 1,
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
              Begin by selecting the highlighted topic.
            </h2>
            {
              this.state.topics.currentlySelected >= 1
              && (
                <button
                  className={css.topicslide__info__continue}
                  onClick={() => this.props.dispatch(nextSlide())}
                >
                  Continue
                </button>
              )
            }
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
                    highlight={!!topic.highlight}
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
