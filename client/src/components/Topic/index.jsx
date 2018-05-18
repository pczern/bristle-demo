import React from 'react'
import PropTypes from 'prop-types'
import css from './index.scss'

const Topic = (props) => {
  if (props.topicSelected) {
    return <button className={css['topic--active']}>{props.children}</button>
  }
  return <button className={css.topic}>{props.children}</button>
}

Topic.propTypes = {
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
  topicSelected: PropTypes.bool.isRequired,
}

export default Topic
