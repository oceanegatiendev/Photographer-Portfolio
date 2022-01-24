'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _Preview = require('./Preview');

var _Preview2 = _interopRequireDefault(_Preview);

var _YotubeViewer = require('./YotubeViewer');

var _YotubeViewer2 = _interopRequireDefault(_YotubeViewer);

require('../css/index.css');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Gallery = function (_React$Component) {
  _inherits(Gallery, _React$Component);

  function Gallery(props) {
    _classCallCheck(this, Gallery);

    /**
     * Set up dafault state
     * currentYtbId : which youtube will be loaded
     * displayFlag : Flag whether youtube player displayed or not 
     **/
    var _this = _possibleConstructorReturn(this, (Gallery.__proto__ || Object.getPrototypeOf(Gallery)).call(this, props));

    _this.state = {
      currentYtbId: null,
      displayFlag: false
    };

    _this._onYutubeLoader = _this._onYutubeLoader.bind(_this);
    _this._onYutubeCloser = _this._onYutubeCloser.bind(_this);
    return _this;
  }

  _createClass(Gallery, [{
    key: '_onYutubeLoader',
    value: function _onYutubeLoader(currentYtbId) {
      this.setState({
        currentYtbId: currentYtbId,
        displayFlag: true
      });
    }
  }, {
    key: '_onYutubeCloser',
    value: function _onYutubeCloser() {
      this.setState({
        displayFlag: false
      });
    }
  }, {
    key: 'render',
    value: function render() {
      if (this.props.youtubes.length > 50) {
        console.error('Component can display up to 50 clips :: you set ' + this.props.youtubes.length + ' clips up');
        return null;
      } else {
        return _react2.default.createElement(
          'div',
          null,
          _react2.default.createElement(
            'div',
            { className: 'yotube_player' },
            _react2.default.createElement(_YotubeViewer2.default, { youtubeInfo: this.state, _onYutubeCloser: this._onYutubeCloser })
          ),
          _react2.default.createElement(_Preview2.default, { youtubes: this.props.youtubes, galleryId: this.props.galleryId, _onYutubeLoader: this._onYutubeLoader })
        );
      }
    }
  }]);

  return Gallery;
}(_react2.default.Component);

;

exports.default = Gallery;