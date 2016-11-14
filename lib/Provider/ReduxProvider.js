'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _getPrototypeOf = require('babel-runtime/core-js/object/get-prototype-of');

var _getPrototypeOf2 = _interopRequireDefault(_getPrototypeOf);

var _classCallCheck2 = require('babel-runtime/helpers/classCallCheck');

var _classCallCheck3 = _interopRequireDefault(_classCallCheck2);

var _createClass2 = require('babel-runtime/helpers/createClass');

var _createClass3 = _interopRequireDefault(_createClass2);

var _possibleConstructorReturn2 = require('babel-runtime/helpers/possibleConstructorReturn');

var _possibleConstructorReturn3 = _interopRequireDefault(_possibleConstructorReturn2);

var _inherits2 = require('babel-runtime/helpers/inherits');

var _inherits3 = _interopRequireDefault(_inherits2);

var _redboxReact2 = require('redbox-react');

var _redboxReact3 = _interopRequireDefault(_redboxReact2);

var _react2 = require('react');

var _react3 = _interopRequireDefault(_react2);

var _reactTransformCatchErrors3 = require('react-transform-catch-errors');

var _reactTransformCatchErrors4 = _interopRequireDefault(_reactTransformCatchErrors3);

var _reactRedux = require('react-redux');

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  ReduxProvider: {
    displayName: 'ReduxProvider'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/Provider/ReduxProvider.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

var ReduxProvider = _wrapComponent('ReduxProvider')(function (_Component) {
  (0, _inherits3.default)(ReduxProvider, _Component);

  function ReduxProvider() {
    (0, _classCallCheck3.default)(this, ReduxProvider);
    return (0, _possibleConstructorReturn3.default)(this, (ReduxProvider.__proto__ || (0, _getPrototypeOf2.default)(ReduxProvider)).apply(this, arguments));
  }

  (0, _createClass3.default)(ReduxProvider, [{
    key: 'render',
    value: function render() {
      var _props = this.props,
          children = _props.children,
          store = _props.store;

      return _react3.default.createElement(
        _reactRedux.Provider,
        { store: store },
        children
      );
    }
  }]);
  return ReduxProvider;
}(_react2.Component));

exports.default = ReduxProvider;
module.exports = exports['default'];