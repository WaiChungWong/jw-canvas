"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _extends = Object.assign || function (target) { for (var i = 1; i < arguments.length; i++) { var source = arguments[i]; for (var key in source) { if (Object.prototype.hasOwnProperty.call(source, key)) { target[key] = source[key]; } } } return target; };

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require("react");

var _react2 = _interopRequireDefault(_react);

var _propTypes = require("prop-types");

var _propTypes2 = _interopRequireDefault(_propTypes);

var _debounce = require("debounce");

var _debounce2 = _interopRequireDefault(_debounce);

var _supportsPassive = require("supports-passive");

var _supportsPassive2 = _interopRequireDefault(_supportsPassive);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _objectWithoutProperties(obj, keys) { var target = {}; for (var i in obj) { if (keys.indexOf(i) >= 0) continue; if (!Object.prototype.hasOwnProperty.call(obj, i)) continue; target[i] = obj[i]; } return target; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; } /*eslint no-unused-vars: ["error", { "ignoreRestSiblings": true }]*/

var eventOptions = _supportsPassive2.default ? { passive: true } : false;

var Canvas = function (_Component) {
  _inherits(Canvas, _Component);

  function Canvas(props) {
    _classCallCheck(this, Canvas);

    var _this = _possibleConstructorReturn(this, (Canvas.__proto__ || Object.getPrototypeOf(Canvas)).call(this, props));

    _this._resizeHandler = (0, _debounce2.default)(function () {
      return _this._updateDimensions();
    }, true);
    return _this;
  }

  _createClass(Canvas, [{
    key: "_updateDimensions",
    value: function _updateDimensions() {
      var canvas = this.canvas,
          props = this.props;
      var offsetWidth = canvas.offsetWidth,
          offsetHeight = canvas.offsetHeight;
      var maintainPixelSize = props.maintainPixelSize;


      if (maintainPixelSize) {
        canvas.width = offsetWidth;
        canvas.height = offsetHeight;

        if (props.onResize) {
          props.onResize(offsetWidth, offsetHeight);
        }
      }
    }
  }, {
    key: "_mount",
    value: function _mount() {
      var canvas = this.canvas,
          props = this.props;


      window.addEventListener("resize", this._resizeHandler, eventOptions);
      canvas.addEventListener("resize", this._resizeHandler, eventOptions);

      if (window.MutationObserver) {
        this.mutationObserver = new window.MutationObserver(this._resizeHandler);
        this.mutationObserver.observe(canvas, { attributes: true });
      }

      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;

      setTimeout(function () {
        if (canvas.width !== canvas.offsetWidth || canvas.height !== canvas.offsetHeight) {
          canvas.width = canvas.offsetWidth;
          canvas.height = canvas.offsetHeight;

          if (props.onResize) {
            props.onResize(canvas.offsetWidth, canvas.offsetHeight);
          }
        }
      });
    }
  }, {
    key: "_unmount",
    value: function _unmount() {
      var canvas = this.canvas;


      window.removeEventListener("resize", this._resizeHandler);
      canvas.removeEventListener("resize", this._resizeHandler);

      if (window.MutationObserver) {
        this.mutationObserver.disconnect();
      }
    }

    /** Retrieve the canvas react component. */

  }, {
    key: "getCanvasElement",
    value: function getCanvasElement() {
      return this.canvas;
    }

    /** Get the context of the canvas. */

  }, {
    key: "getContext",
    value: function getContext() {
      return this.canvas.getContext(this.props.contextType);
    }

    /** Get the image data of the canvas with a give area. */

  }, {
    key: "getImageData",
    value: function getImageData() {
      var startX = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
      var startY = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : 0;
      var endX = arguments.length > 2 && arguments[2] !== undefined ? arguments[2] : this.canvas.width;
      var endY = arguments.length > 3 && arguments[3] !== undefined ? arguments[3] : this.canvas.height;

      return this.getContext().getImageData(startX, startY, endX, endY);
    }
  }, {
    key: "componentDidMount",
    value: function componentDidMount() {
      this._mount();
    }
  }, {
    key: "componentWillUnmount",
    value: function componentWillUnmount() {
      this._unmount();
    }
  }, {
    key: "render",
    value: function render() {
      var _this2 = this;

      var _props = this.props,
          maintainPixelSize = _props.maintainPixelSize,
          onResize = _props.onResize,
          contextType = _props.contextType,
          rest = _objectWithoutProperties(_props, ["maintainPixelSize", "onResize", "contextType"]);

      return _react2.default.createElement("canvas", _extends({ ref: function ref(c) {
          return _this2.canvas = c;
        } }, rest));
    }
  }]);

  return Canvas;
}(_react.Component);

Canvas.propTypes = {
  maintainPixelSize: _propTypes2.default.bool,
  onResize: _propTypes2.default.func,
  contextType: _propTypes2.default.string
};

Canvas.defaultProps = {
  maintainPixelSize: true,
  contextType: "2d"
};

exports.default = Canvas;