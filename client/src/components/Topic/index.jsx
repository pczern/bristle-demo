import React from 'react'
import PropTypes from 'prop-types'
import classNames from 'classnames'
import css from './index.scss'

class Topic extends React.Component {
  static propTypes = {
    children: PropTypes.string.isRequired,
    selected: PropTypes.bool.isRequired,
    onSelect: PropTypes.func,
    onUnselect: PropTypes.func,
    id: PropTypes.number.isRequired,
    highlight: PropTypes.bool.isRequired,
  }

  static defaultProps = {
    onSelect: () => null,
    onUnselect: () => null,
  }
  handleOnClick = () => {
    if (!this.props.selected) this.props.onSelect(this.props.id)
    else this.props.onUnselect(this.props.id)
  }
  render() {
    const classes = classNames(css.topic, {
      [css['topic--selected']]: this.props.selected,
      [css['topic--highlight']]: this.props.highlight,
    })

    return (
      <button onClick={this.handleOnClick} className={classes}>
        {this.props.children}
      </button>
    )
  }
}

export default Topic
