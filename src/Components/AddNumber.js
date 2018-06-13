import React, { Component } from 'react';

class AddNumber extends Component {

  constructor() {
    super();
    this.state = {
      newNumber:{}
    }
  };


  handleSubmit(e) {
    e.preventDefault();
    if(this.refs.title.value === ''){
      alert('A number is required.');
    }
    else {
      this.setState({newNumber:{
          title: this.refs.title.value
        }}, function() {
            this.props.addNumber(this.state.newNumber);
        });

    }
  }

  render() {
    return (
        <div>
          <h3>Guess a Number</h3>
          <form onSubmit={this.handleSubmit.bind(this)}>
            <div>
              <label>Enter a Number</label><br/>
              <input type="number" ref="title" min='0' max='100' />
            </div>
            <input type='submit' value='Submit' />
            <br/>
          </form>
        </div>
    );
  }
}

export default AddNumber;
