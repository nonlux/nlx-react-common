import React, {Component} from 'react';

export function trans(section = 'main') {
  let text = {};
  if (global.LANG && global.LANG[section]) {
    text = global.LANG[section];
  }

  return (WrappedComponent) => {
    return class Trans extends Component {
      render() {
	const props = this.props;
	return <WrappedComponent {...props} text={text} />;
      }
    };
  };
}
