import React, { Component } from 'react';
import NumberItem from './NumberItem'

class Games extends Component {
  render() {
    let numberItems;

    if(this.props.numbers) {
      numberItems = this.props.numbers.map(number => {
        //console.log(number);
        return (
          <NumberItem key={number.title} number={number} />
        )
      });
    }
    return (
      <div className="numbers">
        <h3>Numbers Guessed</h3>
        {numberItems}
      </div>
    );
  }
}

export default Games;
