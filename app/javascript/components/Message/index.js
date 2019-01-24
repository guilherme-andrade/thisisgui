import React from 'react'
import PropTypes from 'prop-types'

import Suggestion from 'components/Message/Suggestion'

class Message extends React.Component {
  constructor(props) {
    super(props)

    this.state = {
      'highlighted': 0
    }
  }

  componentDidMount() {
    window.addEventListener('keydown', e => {
      if (e.keyCode === 9) {
        e.preventDefault()
        e.stopPropagation()
        this.setState({
          ...this.state,
          'highlighted': this.getPosition() + 1
        })
      }
    });
  }

  getPosition = () => {
    const { message } = this.props
    const { highlighted } = this.state
    if (highlighted < message.children.length) { return highlighted }
    return -1
  }

  onSelect = () => {
    const { highlighted } = this.state

  }

  render () {
    const { message } = this.props
    const { highlighted } = this.state

    return (
      <React.Fragment>
        <div className="d-flex align-items-center new-line mt-5">
          <span className="text-info font-weight-bold px-2">~</span>
          <span className="text-success pr-3">cd</span>
          <input id="input" type="text" autoFocus={true}/>
        </div>
        <div className="d-flex font-weight-bold">
          {
            message.children.map((suggestion, index) => (
              <Suggestion
                key={index}
                suggestion={suggestion}
                highlighted={index === highlighted}
              />
            ))
          }
        </div>
      </React.Fragment>
    );
  }
}

export default Message
