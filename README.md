# jw-canvas

A react component for canvas.
Mainly for handling resize events to allow maintaining pixel size (to prevent from stretching).

[![NPM version][npm-image]][npm-url]
[![build status][travis-image]][travis-url]
[![node version][node-image]][node-url]
[![npm download][download-image]][download-url]

[npm-image]: http://img.shields.io/npm/v/jw-canvas.svg
[npm-url]: http://npmjs.org/package/jw-canvas
[travis-image]: https://img.shields.io/travis/WaiChungWong/jw-canvas.svg
[travis-url]: https://travis-ci.org/WaiChungWong/jw-canvas
[node-image]: https://img.shields.io/badge/node.js-%3E=_0.10-green.svg
[node-url]: http://nodejs.org/download/
[download-image]: https://img.shields.io/npm/dm/jw-canvas.svg
[download-url]: https://npmjs.org/package/jw-canvas

[Demo](http://waichungwong.github.io/jw-canvas/build)

## Install

[![NPM](https://nodei.co/npm/jw-canvas.png)](https://nodei.co/npm/jw-canvas)

## Methods

| Method                                                                         | Description                                                                                                                                                                                               |
| ------------------------------------------------------------------------------ | --------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------- |
| `getCanvasElement()`                                                           | retrieve the canvas react component.                                                                                                                                                                      |
| `getContext()`                                                                 | get the context of the canvas.                                                                                                                                                                            |
| `getImageData(startX: integer, startY: integer, endX: integer, endY: integer)` | get the image data of the canvas with a give area. Parameters:<br> - `startX`: Default: `0`<br> - `startY`: Default: `0`<br> - `endX`: Default: the canvas width<br> - `endY`: Default: the canvas height |

## Props

| Prop                          | Description                                                                              |
| ----------------------------- | ---------------------------------------------------------------------------------------- |
| `maintainPixelSize`(optional) | whether the canvas should keep dimension from the moment it was created. Default: `true` |
| `onResize`(optional)          | event handler when the canvas is being resized.                                          |
| `contextType`(optional)       | canvas context type. Default: `"2d"`                                                     |

## Usage

```javascript
import React, { Component } from "react";
import ReactDOM from "react-dom";
import Canvas from "jw-canvas";

class Example extends Component {
  constructor(props) {
    super(props);

    this.resizeHandler = this.resizeHandler.bind(this);
  }

  draw() {
    const canvas = this.myCanvas;

    /** Retrieve the HTML element of the canvas. */
    const element = canvas.getCanvasElement();

    /** Get the width and height of the canvas. */
    const { width, height } = element;

    /** Get the context of the canvas. */
    const context = canvas.getContext();

    /** Get the image data of the canvas with a give area. */
    const imageData = canvas.getImageData(startX, startY, endX, endY);

    /** ... **/
  }

  resizeHandler(width, height) {
    /** ... **/
  }

  render() {
    return (
      <Canvas
        ref={myCanvas => (this.myCanvas = myCanvas)}
        onResize={this.resizeHandler}
        maintainPixelSize={false}
        contextType="2d"
      />
    );
  }
}

ReactDOM.render(<Example />, document.getElementById("root"));
```
