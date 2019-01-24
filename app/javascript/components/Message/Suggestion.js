import React from 'react'
import PropTypes from 'prop-types'

class Suggestion extends React.Component {

  checkHighlighted = () => this.props.highlighted ? 'bg-white text-dark' : 'text-danger';

  render () {
    const { suggestion, highlighted } = this.props
    return (
      <button
        className={`mx-2 px-1 font-weight-normal option ${this.checkHighlighted()}`}
      >
        {suggestion.action}
        <span className="text-white">/</span>
      </button>
    );
  }
}

export default Suggestion
