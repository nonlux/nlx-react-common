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

var _whyDidYouUpdate = require('why-did-you-update');

var _whyDidYouUpdate2 = _interopRequireDefault(_whyDidYouUpdate);

var _ReduxDevTools = require('./ReduxDevTools');

var _ReduxDevTools2 = _interopRequireDefault(_ReduxDevTools);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var _components = {
  DevTools: {
    displayName: 'DevTools'
  }
};

var _reactTransformCatchErrors2 = (0, _reactTransformCatchErrors4.default)({
  filename: 'src/DevTools/DevTools.js',
  components: _components,
  locals: [],
  imports: [_react3.default, _redboxReact3.default]
});

function _wrapComponent(id) {
  return function (Component) {
    return _reactTransformCatchErrors2(Component, id);
  };
}

//import config from 'config';

var DevTools = _wrapComponent('DevTools')(function (_Component) {
  (0, _inherits3.default)(DevTools, _Component);

  function DevTools() {
    (0, _classCallCheck3.default)(this, DevTools);
    return (0, _possibleConstructorReturn3.default)(this, (DevTools.__proto__ || (0, _getPrototypeOf2.default)(DevTools)).apply(this, arguments));
  }

  (0, _createClass3.default)(DevTools, [{
    key: 'componentWillMount',
    value: function componentWillMount() {
      /* move to props 
       if (config.devTools && config.logReactUpdates)
       LogUpdates(React, {
         exclude: /^t|MobX.*|.*DockMonitor.*|MultipleMonitors.*|Connect.*$/
       });
       */
    }
  }, {
    key: 'render',
    value: function render() {
      var _true = true,
          devTools = _true.devTools;

      return _react3.default.createElement(
        'div',
        null,
        devTools && _react3.default.createElement(_ReduxDevTools2.default, null)
      );
    }
  }]);
  return DevTools;
}(_react2.Component));

exports.default = DevTools;
;
module.exports = exports['default'];