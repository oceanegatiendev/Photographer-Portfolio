'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _createClass = function () { function defineProperties(target, props) { for (var i = 0; i < props.length; i++) { var descriptor = props[i]; descriptor.enumerable = descriptor.enumerable || false; descriptor.configurable = true; if ("value" in descriptor) descriptor.writable = true; Object.defineProperty(target, descriptor.key, descriptor); } } return function (Constructor, protoProps, staticProps) { if (protoProps) defineProperties(Constructor.prototype, protoProps); if (staticProps) defineProperties(Constructor, staticProps); return Constructor; }; }();

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _jquery = require('jquery');

var _jquery2 = _interopRequireDefault(_jquery);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

function _classCallCheck(instance, Constructor) { if (!(instance instanceof Constructor)) { throw new TypeError("Cannot call a class as a function"); } }

function _possibleConstructorReturn(self, call) { if (!self) { throw new ReferenceError("this hasn't been initialised - super() hasn't been called"); } return call && (typeof call === "object" || typeof call === "function") ? call : self; }

function _inherits(subClass, superClass) { if (typeof superClass !== "function" && superClass !== null) { throw new TypeError("Super expression must either be null or a function, not " + typeof superClass); } subClass.prototype = Object.create(superClass && superClass.prototype, { constructor: { value: subClass, enumerable: false, writable: true, configurable: true } }); if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass; }

var Preview = function (_React$Component) {
  _inherits(Preview, _React$Component);

  function Preview(props) {
    _classCallCheck(this, Preview);

    var _this = _possibleConstructorReturn(this, (Preview.__proto__ || Object.getPrototypeOf(Preview)).call(this, props));

    _this.max_page = Math.ceil(_this.props.youtubes.length / 4) - 1;
    _this.current_page = 0;
    _this._setYotubeInfo = _this._setYotubeInfo.bind(_this);
    _this._previewNext = _this._previewNext.bind(_this);
    _this._previewPrev = _this._previewPrev.bind(_this);
    _this._setMaxString = _this._setMaxString.bind(_this);
    return _this;
  }

  _createClass(Preview, [{
    key: '_setYotubeInfo',
    value: function _setYotubeInfo(e) {
      this.props._onYutubeLoader(e.target.id);
    }
  }, {
    key: '_previewNext',
    value: function _previewNext() {

      if (this.current_page >= this.max_page) {
        this.current_page = this.max_page;
      } else {
        var targetPage = ++this.current_page * -100;
        (0, _jquery2.default)('#' + this.props.galleryId).animate({
          left: targetPage + "%"
        }, 500);
      }
    }
  }, {
    key: '_previewPrev',
    value: function _previewPrev() {
      if (this.current_page <= 0) {
        this.current_page = 0;
      } else {
        var targetPage = --this.current_page * -100;
        (0, _jquery2.default)('#' + this.props.galleryId).animate({
          left: targetPage + "%"
        }, 500);
      }
    }
  }, {
    key: '_setMaxString',
    value: function _setMaxString(str) {
      if (str.length <= 20) {
        return str;
      } else {
        return str.substring(0, 19) + '..';
      }
    }
  }, {
    key: 'render',
    value: function render() {
      var _this2 = this;

      return _react2.default.createElement(
        'div',
        { 'class': 'preview_whole' },
        _react2.default.createElement(
          'div',
          { className: 'preview_btn_wrapper' },
          _react2.default.createElement(
            'div',
            { className: 'left_arrow' },
            _react2.default.createElement('span', { className: 'css-arrow-left', onClick: this._previewPrev })
          ),
          _react2.default.createElement(
            'div',
            { className: 'right_arrow' },
            _react2.default.createElement('span', { className: 'css-arrow-right', onClick: this._previewNext })
          )
        ),
        _react2.default.createElement(
          'div',
          { className: 'preview_wrap' },
          _react2.default.createElement(
            'div',
            { className: 'preview_wrapper' },
            _react2.default.createElement(
              'div',
              { className: 'preview_wrap_in', id: this.props.galleryId },
              _react2.default.createElement(
                'ul',
                { className: 'preview_list' },
                this.props.youtubes.map(function (image) {
                  var imgSrc = 'https://img.youtube.com/vi/' + image.id + '/hqdefault.jpg';
                  var previewTitle = _this2._setMaxString(image.title);
                  var previewDescrp = _this2._setMaxString(image.descrp);
                  return _react2.default.createElement(
                    'li',
                    { key: image.id, onClick: _this2._setYotubeInfo },
                    _react2.default.createElement(
                      'div',
                      { className: 'previewImgDiv' },
                      _react2.default.createElement('img', { src: imgSrc, id: image.id, className: 'previewCover' })
                    ),
                    _react2.default.createElement(
                      'div',
                      null,
                      _react2.default.createElement(
                        'div',
                        { className: 'preview_title' },
                        previewTitle
                      ),
                      _react2.default.createElement(
                        'div',
                        { className: 'preview_descrp' },
                        previewDescrp
                      )
                    )
                  );
                })
              )
            )
          )
        )
      );
    }
  }]);

  return Preview;
}(_react2.default.Component);

exports.default = Preview;