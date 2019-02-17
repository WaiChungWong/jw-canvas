/*eslint no-unused-vars: ["error", { "ignoreRestSiblings": true }]*/

import React, { Component } from "react";
import PropTypes from "prop-types";
import debounce from "debounce";
import supportsPassive from "supports-passive";

const eventOptions = supportsPassive ? { passive: true } : false;

class Canvas extends Component {
  constructor(props) {
    super(props);

    this._resizeHandler = debounce(() => this._updateDimensions(), true);
  }

  _updateDimensions() {
    if (this.props.maintainPixelSize) {
      this._checkResize();
    }
  }

  _checkResize() {
    const { canvas, props } = this;
    const { offsetWidth, offsetHeight, width, height } = canvas;

    if (width !== offsetWidth || height !== offsetHeight) {
      canvas.width = offsetWidth;
      canvas.height = offsetHeight;

      if (props.onResize) {
        props.onResize(offsetWidth, offsetHeight);
      }
    }
  }

  _mount() {
    const { canvas } = this;

    window.addEventListener("resize", this._resizeHandler, eventOptions);
    canvas.addEventListener("resize", this._resizeHandler, eventOptions);

    if (window.MutationObserver) {
      this.mutationObserver = new window.MutationObserver(this._resizeHandler);
      this.mutationObserver.observe(document.documentElement, {
        attributes: true,
        subtree: true
      });
    }

    canvas.width = canvas.offsetWidth;
    canvas.height = canvas.offsetHeight;

    setTimeout(() => this._checkResize());
  }

  _unmount() {
    const { canvas } = this;

    window.removeEventListener("resize", this._resizeHandler);
    canvas.removeEventListener("resize", this._resizeHandler);

    if (window.MutationObserver) {
      this.mutationObserver.disconnect();
    }
  }

  /** Retrieve the canvas react component. */
  getCanvasElement() {
    return this.canvas;
  }

  /** Get the context of the canvas. */
  getContext() {
    return this.canvas.getContext(this.props.contextType);
  }

  /** Get the image data of the canvas with a give area. */
  getImageData(
    startX = 0,
    startY = 0,
    endX = this.canvas.width,
    endY = this.canvas.height
  ) {
    return this.getContext().getImageData(startX, startY, endX, endY);
  }

  componentDidMount() {
    this._mount();
  }

  componentWillUnmount() {
    this._unmount();
  }

  render() {
    const { maintainPixelSize, onResize, contextType, ...rest } = this.props;
    return <canvas ref={c => (this.canvas = c)} {...rest} />;
  }
}

Canvas.propTypes = {
  maintainPixelSize: PropTypes.bool,
  onResize: PropTypes.func,
  contextType: PropTypes.string
};

Canvas.defaultProps = {
  maintainPixelSize: true,
  contextType: "2d"
};

export default Canvas;
