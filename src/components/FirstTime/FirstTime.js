import React, { Component } from 'react';

class FirstTime extends Component {
  state = {
    inputVal: ''
  };

  setInputVal = e => {
    this.setState({ [e.target.name]: e.target.value });
  }
  
  render() {
    return (
      <div>
        <p>First off, I'm proud of you for atleast attempting to quit.</p>
        <p>Secondly, it seems this may be your first time here.</p>
        <p>Can I know your name?</p>

        <form>
          <input
            name='name'
            value={ this.state.inputVal }
            onChange={ this.setInputVal }
          />
        </form>
      </div>
    )
  }
}
 
export default FirstTime;