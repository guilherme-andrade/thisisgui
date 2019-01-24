import React from 'react'
import PropTypes from 'prop-types'

const Message = ({ message }) => (
  <div className="d-flex align-items-center new-line mt-5 mb-2">
    <span className="text-info font-weight-bold px-2">~</span>
    <p
      className="mb-0"
      id="input"
    >
      <span className="text-success pr-2">{message.command}</span>
      {message.action}
    </p>
  </div>
)

export default Message
