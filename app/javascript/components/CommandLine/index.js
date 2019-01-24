import React from 'react'
import PropTypes from 'prop-types'
import _ from 'lodash'

import InitialMessage from 'components/CommandLine/InitialMessage'
import Input from 'components/Input'
import Message from 'components/Message'

class CommandLine extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      'messageHistory': [],
      'inputMessage': '',
      'typing': true
    }
  }

  componentWillMount() {
    this.getFirstMessage()
  }

  getFirstMessage = () => {
    fetch(`/messages/first`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          ...this.state,
          'inputMessage': data
        })
      })
  }

  addToMessageHistory = (option, e) => {
    const { messageHistory } = this.state
    fetch(`/messages/${option.id}`)
      .then(response => {
        return response.json();
      })
      .then(data => {
        this.setState({
          ...this.state,
          'inputMessage': data
        })
        messageHistory.push(data)

        if (option.link) {
          this.getFirstMessage()
        }
      })

    if (!option.link) {
      e.preventDefault()
    }
  }

  stopTyping = () => {
    this.setState({
      ...this.state,
      'typing': false
    })
  }

  render () {
    const { inputMessage, messageHistory, typing } = this.state

    if (!inputMessage) { return null }
    if (!messageHistory) { return null }
    return (
      <React.Fragment>
        <InitialMessage onTypingDone={() => this.stopTyping()} />
        {
          messageHistory.map(message => (
            <Message message={message} />
          ))
        }
        { typing ? null :<Input message={inputMessage} addToMessageHistory={this.addToMessageHistory} /> }
      </React.Fragment>
    );
  }
}
export default CommandLine


