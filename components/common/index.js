import React from 'react';

export Root from './Root/Root';
export DevTools from './DevTools/DevTools';
export MobxProvider from './Provider/MobxProvider';

export function Header({children}) {
  return (<header>{children}</header>);
}

// export ReduxDevTools from './DevTools/ReduxDevTools';
/* providers */
// export ReduxProvider from './Provider/ReduxProvider';


