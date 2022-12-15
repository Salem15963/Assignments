import React, { Component } from "react";

class Box extends Component {
  constructor(props) {
    super(props);
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick(e) {
    this.props.removeBox();
  }

  render() {
    function nameToRGB(c) {
      let d = document.createElement("div");
      d.style.color = c;
      document.body.appendChild(d);
      //Color in RGB
      return {
        rgb: window.getComputedStyle(d).color,
        rgba: `${window.getComputedStyle(d).color.split(")")[0]} , 0.29)`
      };
    }

    let color = nameToRGB(this.props.color);
    let rgb = color.rgb;
    let rgba = color.rgba;

    let btnStyle = {
      border: `1px solid ${rgb}`,
      color: rgb,
      boxShadow: `0px 8px 18px -5px ${rgba}`
    };

    let boxStyle = {
      width: this.props.width,
      height: this.props.height,
      backgroundColor: rgb
    };

    return (
      <div className="Box">
        <div className="Box-box" style={boxStyle} />
        <button onClick={this.handleClick} className="Box-btn" style={btnStyle}>
          Remove
        </button>
      </div>
    );
  }
}

export default Box;
