import React from 'react'
import PropTypes from 'prop-types'

import Suggestion from 'components/Input/Suggestion'
import Message from 'components/Message'

const Input = ({ message, addToMessageHistory }) => (
  <div>
    <Message message={message} />
    <div className="d-flex font-weight-bold">
      {
        message.children && message.children.map(suggestion => (
          <Suggestion
            key={suggestion.id}
            suggestion={suggestion}
            onSelect={addToMessageHistory}
          />
        ))
      }
    </div>
  </div>
);

export default Input
