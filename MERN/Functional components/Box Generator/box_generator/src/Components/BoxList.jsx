import React, { Component } from "react";
import Box from "./Box";
import Form from "./Form";
import { v4 as uuid } from "uuid";

class BoxList extends Component {
  constructor(props) {
    super(props);
    this.state = {
      boxes: []
    };

    this.addBox = this.addBox.bind(this);
    this.removeBox = this.removeBox.bind(this);
  }

  addBox(box) {
    let newBox = box;
    this.setState(st => ({
      boxes: [...st.boxes, newBox]
    }));
  }

  removeBox(id) {
    let box = this.state.boxes.find(box => {
      if (box.id === id) {
        return true;
      }
      return false;
    });
    let idx = this.state.boxes.indexOf(box);

    this.setState(st => {
      let newBoxes = [...st.boxes];
      newBoxes.splice(idx, 1);
      return {
        boxes: newBoxes
      };
    });
  }

  render() {
    return (
      <div>
        <Form addBox={this.addBox} />
        <div className="BoxList">
          {this.state.boxes.map(box => (
            <Box
              key={box.id}
              color={box.color}
              width={box.width}
              height={box.height}
              removeBox={() => this.removeBox(box.id)}
            />
          ))}
        </div>
      </div>
    );
  }
}

export default BoxList;
