import React, { Component } from 'react';
import LogUpdates from 'why-did-you-update';
//import config from 'config';
import MobxDevTools from 'mobx-react-devtools';

export default class DevTools extends Component {
  componentWillMount() {
   /* move to props
    if (config.devTools && config.logReactUpdates)
    LogUpdates(React, {
      exclude: /^t|MobX.*|.*DockMonitor.*|MultipleMonitors.*|Connect.*$/
    });
    */
  }
  render() {
    return (<div>
            <MobxDevTools />
      {/* devTools && <ReduxDevTools /> */}
    </div>);
  }
}
