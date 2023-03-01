import React from "react";
import "./style.css";
class Button extends React.Component {
  state = {
    title: "Light",
  };
  handelToggle = () => {
    this.setState((prev) =>
      prev.title === "Light"
        ? { ...prev, title: "Dark" }
        : { ...prev, title: "Light" }
    );
  };
  render() {
    return (
      <button className="themeBtn" onClick={this.handelToggle}>
        {this.state.title}
      </button>
    );
  }
}
export default Button;
