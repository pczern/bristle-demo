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

class SubtopicSlide extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      topics: {
        data: [
          { id: 0, name: 'Adding & Subtracting Polynomials', highlight: true },
          { id: 1, name: 'Adding and Subtracting Polynomials: Two Variables', highlight: false },
          { id: 2, name: 'Multiplying Monomials', highlight: false },
          { id: 3, name: 'Multiplying Monomials by Polynomials', highlight: true },
          { id: 4, name: 'Multiplying Binomials', highlight: false },
          { id: 5, name: 'Multiplying Binomials by Polynomials', highlight: false },
          { id: 6, name: 'Special Products of Binomials', highlight: true },
          { id: 7, name: 'Polynomials Word Problems', highlight: false },
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
      <Slide className={css.subtopicslide}>
        <div className={leftPanel}>
          <div className={panelGuide}>
            <h2 className={css.subtopicslide__info__header}>
              You may want only certain concepts to be practiced by your students,
              so let’s select the highlighted subtopics.
            </h2>
            {
              this.state.topics.currentlySelected >= 3
              && (
                <button
                  className={css.subtopicslide__info__continue}
                  onClick={() => this.props.dispatch(nextSlide())}
                >
                  Continue
                </button>
              )
            }
          </div>
        </div>
        <div className={rightPanel}>
          <div className={css.subtopicslide__topics}>
            <h3 className={css.subtopicslide__topics__header}>
              Polynomials Subtopics
            </h3>
            <ul className={css.subtopicslide__topics__list}>
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

SubtopicSlide.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(SubtopicSlide)
