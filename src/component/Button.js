import React, { Component } from "react";

class Buttons extends Component {
  constructor(props) {
    super(props);
    this.increment = this.increment.bind(this);
    this.decrement = this.decrement.bind(this);
  }
  increment() {
    this.props.increment(2);
  }
  decrement() {
    this.props.decrement(2);
  }
  render() {
    return (
      <div className="App">
        <div>
          <span>
            <button onClick={this.increment}>Increment By 2</button>
          </span>
          <span> Val : {this.props.incrementVal}</span>
        </div>
        <div>
          <span>
            <button onClick={this.decrement}>Decrement By 2:</button>
          </span>
          Val : {this.props.decrementVal}
          <span />
        </div>
      </div>
    );
  }
}

export default Buttons;
