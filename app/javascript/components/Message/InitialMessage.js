import React from 'react'
import Typist from 'react-typist'

const Message = ({ onTypingDone }) => (
  <Typist cursor={{element: '_'}} onTypingDone={() => onTypingDone()}>
    Hi there.
    <Typist.Delay ms={500} /><br/>
    My name is Gui, <Typist.Delay ms={200} />I'm a Web Developer and Designer.
    <Typist.Delay ms={300} /><br/>
    <Typist.Delay ms={200} /><br/>
    <Typist.Delay ms={700} />
    Use command line commands to navigate through my portfolio, <Typist.Delay ms={200} /><br/>
    or type <span className="text-success">help</span> for more commands.
  </Typist>
)

export default Message
