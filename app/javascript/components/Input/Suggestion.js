import React from 'react'
import PropTypes from 'prop-types'

const Suggestion = ({ suggestion, onSelect }) => (
  <a
    onClick={e => onSelect(suggestion, e)}
    className="mx-3 px-1 font-weight-normal option"
    href={suggestion.link || '#'}
    target="_blank"
  >
    <span
      className={suggestion.command === 'open' ? 'text-info' : 'text-danger'}
    >
     {suggestion.action}
    </span>
    <span
      className={suggestion.command === 'open' ? 'd-none' : ''}
    >
      /
    </span>
  </a>
);

export default Suggestion
