import React, { Component } from 'react';
import Games from './Components/Games';
import AddNumber from './Components/AddNumber';
import './App.css';

class App extends Component {
 constructor(props) {
   super(props);
   this.state = {
     hiddenNumber: Math.floor((Math.random() * 100) + 1),
     numbers: [],
     status: ''
   }
 }
  componentWillMount() {
   this.setState({numbers: []});
 }

 handleAddNumber(number) {
   let numbers = this.state.numbers;

   numbers.push(number);
  
   let enteredNumber = number.title;
   let numberToGuess = this.state.hiddenNumber;
   
   console.log('number to guess: ' + numberToGuess);
   console.log('entered number: ' + enteredNumber);

   if (numberToGuess == enteredNumber) {
      this.setState({status:'YOU WIN!'});
   }
   else if(Math.abs(numberToGuess - enteredNumber) <= 5) {
      this.setState({status:'LAVA'});
   }   
   else if(Math.abs(numberToGuess - enteredNumber) <= 10) {
      this.setState({status:'HOT'});
   } 
   else if(Math.abs(numberToGuess - enteredNumber) <= 15) {
      this.setState({status:'WARM'});
   } 
   else if(Math.abs(numberToGuess - enteredNumber) <= 25) {
      this.setState({status:'WARM'});
   } 
   else {
      this.setState({status:'ICE COLD'});
   }
 }

  render() {
    return (
      <div className="App">
        <AddNumber addNumber={this.handleAddNumber.bind(this)}/>
        <Games numbers={this.state.numbers}/>
        <br/>
        <hr/>
        <h2>{this.state.status}</h2>
      </div>
    );
  }
}

export default App;
