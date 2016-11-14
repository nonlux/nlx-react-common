'use strict';

Object.defineProperty(exports, "__esModule", {
  value: true
});

var _react = require('react');

var _react2 = _interopRequireDefault(_react);

var _reduxDevtools = require('redux-devtools');

var _reduxDevtoolsLogMonitor = require('redux-devtools-log-monitor');

var _reduxDevtoolsLogMonitor2 = _interopRequireDefault(_reduxDevtoolsLogMonitor);

var _reduxDevtoolsDockMonitor = require('redux-devtools-dock-monitor');

var _reduxDevtoolsDockMonitor2 = _interopRequireDefault(_reduxDevtoolsDockMonitor);

var _reduxDevtoolsDispatch = require('redux-devtools-dispatch');

var _reduxDevtoolsDispatch2 = _interopRequireDefault(_reduxDevtoolsDispatch);

var _reduxDevtoolsMultipleMonitors = require('redux-devtools-multiple-monitors');

var _reduxDevtoolsMultipleMonitors2 = _interopRequireDefault(_reduxDevtoolsMultipleMonitors);

function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { default: obj }; }

var DevTools = (0, _reduxDevtools.createDevTools)(_react2.default.createElement(
  _reduxDevtoolsDockMonitor2.default,
  { toggleVisibilityKey: 'ctrl-h',
    changePositionKey: 'ctrl-q',
    defaultIsVisible: false },
  _react2.default.createElement(
    _reduxDevtoolsMultipleMonitors2.default,
    null,
    _react2.default.createElement(_reduxDevtoolsLogMonitor2.default, { theme: 'tomorrow' }),
    _react2.default.createElement(_reduxDevtoolsDispatch2.default, null)
  )
));

exports.default = DevTools;
module.exports = exports['default'];