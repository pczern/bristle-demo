import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import css from './index.scss'

const Slide = props => (
  <div className={classNames(css.slide, props.className)}>
    <div className={css.slide__firstArea}>{props.children[0]}</div>
    <div className={css.slide__secondArea}>{props.children[1]}</div>
  </div>
)

Slide.propTypes = {
  className: PropTypes.string,
  children: PropTypes.arrayOf(PropTypes.any).isRequired,
}
Slide.defaultProps = {
  className: null,
}

export default Slide
