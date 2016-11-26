import React from 'react';
import { Provider } from 'mobx-react';

export default function MobxProvider({ store, children }) {
  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
}
