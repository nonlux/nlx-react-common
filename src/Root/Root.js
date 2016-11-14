import React, {Component} from 'react';

import {
  DevTools,
  ReduxProvider as Provider,
} from '../index';

export default class Root extends Component {
  render() {
    const { children, store } = this.props;
    return (
    <Provider store={store}>
      <div>
        { children }
        <DevTools/>
      </div>
    </Provider>
    );
  }
}
