import React, { Component } from "react";
import { render } from "react-dom";

import Canvas from "./module";

import "./style.css";

class Demo extends Component {
  componentDidMount() {
    this.draw1();
    this.draw2();
  }

  draw1() {
    this.draw(this.canvas1);
  }

  draw2() {
    this.draw(this.canvas2);
  }

  draw(canvas) {
    const context = canvas.getContext();
    const element = canvas.getCanvasElement();
    const { width, height } = element;

    const radius = 70;
    const centerX = width / 2;
    const centerY = height / 2;

    context.beginPath();
    context.arc(centerX, centerY, radius, 0, 2 * Math.PI, false);
    context.fillStyle = "green";
    context.fill();
    context.lineWidth = 5;
    context.strokeStyle = "#003300";
    context.stroke();
  }

  render() {
    return (
      <div>
        <div className="canvas-wrapper">
          <span className="title">Draw once only</span>
          <Canvas
            ref={c => (this.canvas1 = c)}
            id="canvas1"
            maintainPixelSize={false}
          />
        </div>
        <div className="canvas-wrapper">
          <span className="title">Redraw on resize</span>
          <Canvas
            ref={c => (this.canvas2 = c)}
            id="canvas2"
            onResize={() => this.draw2()}
          />
        </div>
      </div>
    );
  }
}

render(<Demo />, document.getElementById("root"));
