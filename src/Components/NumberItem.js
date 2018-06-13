import React, { Component } from 'react';

class NumberItem extends Component {
  render() {
    return (
      <li className="Number">
        <strong>{this.props.number.title}</strong>
      </li>
    );
  }
}

export default NumberItem;
