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
    console.log(this.props);
    return (
      <div className="App">
        <button onClick={this.increment}>
          Button {this.props.incrementVal}
        </button>
        <button onClick={this.decrement}>
          Button {this.props.decrementVal}
        </button>
      </div>
    );
  }
}

export default Buttons;
