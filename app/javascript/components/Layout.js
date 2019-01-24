import React from 'react'
import ReactDOM from 'react-dom';
import PropTypes from 'prop-types'
import _ from 'lodash'

import CommandLine from 'components/CommandLine'
import InitialMessage from 'components/Message/InitialMessage'

class Layout extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      'typing': false
    }
  }

  stopTyping = () => {
    this.setState({
      ...this.state,
      'typing': false
    })
  }

  render () {
    const { typing } = this.state

    return (
      <React.Fragment>
        <InitialMessage onTypingDone={this.stopTyping}/>
        { typing ? null : <CommandLine /> }
      </React.Fragment>
    );
  }
}

export default Layout
