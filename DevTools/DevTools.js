import React, {Component} from 'react';
import LogUpdates from 'why-did-you-update';
import ReduxDevTools  from './ReduxDevTools';
//import config from 'config';

export default class DevTools extends Component{
  componentWillMount() {
   /* move to props 
    if (config.devTools && config.logReactUpdates)
    LogUpdates(React, {
      exclude: /^t|MobX.*|.*DockMonitor.*|MultipleMonitors.*|Connect.*$/
    });
    */
  }
  render () {
    const {devTools} = true;
    return <div>
    {devTools && <ReduxDevTools />}
    </div>
  }
};
