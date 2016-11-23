import React, {Component, PropTypes} from 'react';
import {Provider} from 'react-redux';

export default class ReduxProvider extends Component {
  render () {
    const {children, store} = this.props;
    return (
      <Provider store={store}>
       {children}
      </Provider>
    );
  }
}
