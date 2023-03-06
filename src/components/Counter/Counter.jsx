import React, { Component } from "react";
import "./style.css";
// Task03
class Counter extends Component {
  state = {
    counterValue: 0,
    step: 1,
  };
  increaseHandler = () => {
    this.setState((prev) => ({
      ...prev,
      counterValue: prev.counterValue + prev.step,
    }));
  };
  decreesHandler = () => {
    if (this.state.counterValue > 0) {
      this.setState((prev) => ({
        ...prev,
        counterValue: prev.counterValue - prev.step,
      }));
    }
  };
  stepHandler = (e) => {
    this.setState((prev) => ({
      ...prev,
      step: e.target.value && e.target.value >= 0 ? Number(e.target.value) : 1,
    }));
  };
  render() {
    return (
      <div className="counterWrapper">
        <button className="increaseBtn" onClick={this.increaseHandler}>
          +
        </button>
        <span className="counterValue">{this.state.counterValue}</span>
        <button className="decreesBtn" onClick={this.decreesHandler}>
          -
        </button>
        <input className="counterInput" onChange={(e) => this.stepHandler(e)} />
      </div>
    );
  }
}

export default Counter;
