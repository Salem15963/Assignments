import React, { Component } from "react";
import { v4 as uuid } from "uuid";

class Form extends Component {
  constructor(props) {
    super(props);
    this.state = {
      color: "",
      width: "",
      height: "",
      id: uuid()
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  validateForm() {
    if (
      this.state.color === "" ||
      this.state.width === "" ||
      this.state.height === ""
    ) {
      return 0;
    }
    return 1;
  }

  handleChange(e) {
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    if (this.validateForm()) {
      this.props.addBox(this.state);
      this.setState({
        color: "",
        width: "",
        height: "",
        id: uuid()
      });
    }
  }
  render() {
    return (
      <div className="Form">
        <h1>Form</h1>
        <form onSubmit={this.handleSubmit}>
          <div className="Form-inputContainer">
            <label htmlFor="color">Color: </label>
            <input
              type="text"
              name="color"
              placeholder="name / hex / rgb"
              onChange={this.handleChange}
              value={this.state.color}
            />
          </div>
          <div className="Form-inputContainer">
            <label htmlFor="width">Width: </label>
            <input
              type="text"
              name="width"
              placeholder="width"
              onChange={this.handleChange}
              value={this.state.width}
            />
          </div>
          <div className="Form-inputContainer">
            <label htmlFor="height">Height: </label>
            <input
              type="text"
              name="height"
              placeholder="height"
              onChange={this.handleChange}
              value={this.state.height}
            />
          </div>
          <button className="Form-btn" type="submit">
            Add Box
          </button>
        </form>
      </div>
    );
  }
}

export default Form;
    