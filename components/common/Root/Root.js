import React, {Component} from 'react';

import {
  DevTools,
  MobxProvider as Provider
} from 'components/common';

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
