import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import Message from 'components/Message'

class CommandLine extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      'messageHistory': []
    }
  }

  componentWillMount() {
    fetch(`/messages`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          ...this.state,
          'messageHistory': [_.first(data)]
        })
      })
  }


  render () {
    const { messageHistory } = this.state

    const firstMessage = _.first(messageHistory)

    if (!firstMessage) { return null }

    return (
      <React.Fragment>
        <Message message={firstMessage} />
      </React.Fragment>
    );
  }
}
export default CommandLine


