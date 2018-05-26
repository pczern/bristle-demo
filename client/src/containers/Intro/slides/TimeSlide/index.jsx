import React from 'react'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import update from 'immutability-helper'
import { nextSlide } from '../../../../actions'
import Slide from '../../../../components/Slide'
import TimeCard from '../../../../components/TimeCard'
import css from './index.scss'
// Universal slide styles
import { leftPanel, rightPanel, panelGuide } from '../../index.scss'

class TimeSlide extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      times: {
        data: [
          { id: 0, name: '5 minutes', highlight: false },
          { id: 1, name: '10 minutes', highlight: false },
          { id: 2, name: '15 minutes', highlight: true },
          { id: 3, name: '20 minutes', highlight: false },
          { id: 4, name: '30 minutes', highlight: false },
        ],
        maxSelectable: 1,
        currentlySelected: 0, // count of how many are selected
      },
    }
  }

  selectTime = (id) => {
    if (this.state.times.currentlySelected < this.state.times.maxSelectable) {
      this.setState((state) => {
        const newTimes = update(state.times, {
          data: { [id]: { selected: { $set: true } } },
        })
        newTimes.currentlySelected = state.times.currentlySelected + 1
        return { times: newTimes }
      })
    }
  }

  unselectTime = (id) => {
    this.setState((state) => {
      const newTimes = update(state.times, {
        data: { [id]: { selected: { $set: false } } },
      })
      newTimes.currentlySelected = state.times.currentlySelected - 1
      return { times: newTimes }
    })
  }

  render() {
    return (
      <Slide className={css.timeslide}>
        <div className={leftPanel}>
          <div className={panelGuide}>
            <h2 className={css.timeslide__info__header}>
            Here you can customize the time an assignment might
            take to complete for the average student.
            Select 10 minutes.
            </h2>
            {
              this.state.times.currentlySelected >= 1
              && (
                <button
                  className={css.timeslide__info__continue}
                  onClick={() => this.props.dispatch(nextSlide())}
                >
                  Continue
                </button>
              )
            }
          </div>
        </div>
        <div className={rightPanel}>
          <div className={css.timeslide__times}>
            <h3 className={css.timeslide__times__header}>
              Select your time
            </h3>
            <ul className={css.timeslide__times__list}>
              {this.state.times.data.map(time => (
                <li key={time.id}>
                  <TimeCard
                    id={time.id}
                    selected={!!time.selected}
                    onSelect={this.selectTime}
                    onUnselect={this.unselectTime}
                    highlight={!!time.highlight}
                  >
                    {time.name}
                  </TimeCard>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </Slide>
    )
  }
}

TimeSlide.propTypes = {
  dispatch: PropTypes.func.isRequired,
}

export default connect()(TimeSlide)
