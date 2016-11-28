import React, {Component} from 'react';
import { observable, action } from 'mobx';
import {observer } from 'mobx-react';

export Root from './Root/Root';
export DevTools from './DevTools/DevTools';
export MobxProvider from './Provider/MobxProvider';


export function Header({children}) {
  return (<header>{children}</header>);
}


export function H1({children}) {
  return (
    <h1>{children}</h1>
  );
}
export function H2({children}) {
  return (
    <h2>{children}</h2>
  );
}
export function H3({children}) {
  return (
    <h3>{children}</h3>
  );
}
export function HH({children, size}) {
  let Next = H1;
  if (size == 2) {
    Next = H2;
  }
  if (size == 3) {
    Next = H3;
  }
  return (
    <Next>{children}</Next>
  );
}


@observer
export class Openable extends Component {
  @observable open=false;
  @action toggle() {
    this.open = !this.open;
  }
  @action close() {
    this.open = false;
  }
  render() {
    const { children } = this.props;
    const nextChildren = React.cloneElement(children, {
      open: this.open,
      onToggle: () => { this.toggle() },
      onClose: () => { this.close() },
    });

    return nextChildren;
  }
}

// export ReduxDevTools from './DevTools/ReduxDevTools';
/* providers */
// export ReduxProvider from './Provider/ReduxProvider';


