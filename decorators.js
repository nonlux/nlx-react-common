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

import { connect } from 'react-redux';

export function fetched( action, mapStateToProps) {
  return (WrappedComponent) => {
    class FetchedComponent extends Component {
      componentDidMount() {
        const {loaded, dispatch} = this.props;
        if (!loaded) {
          dispatch(action());
        }
      }
      render () {
        const {loaded, loading, ...rest} = this.props;
        if (loaded) {
          return <WrappedComponent {...rest}/>;
        }

        return <span/>;
      }
    };

    return connect(mapStateToProps)(FetchedComponent);
  };
}

export function extractRoute() {
  return (WrappedComponent) => {
    return class Trans extends Component {
      render() {
	const { route, params,  routeParams, router, routes, ...rest} = this.props;
	return <WrappedComponent {...rest} {...params}/>;
      }
    };
  };

}

export function dispatched( action) {
  return (WrappedComponent) => {
    class FetchedComponent extends Component {
      componentDidMount() {
         this.props.dispatch(action(this.props));
      }
      render () {
        const {...rest} = this.props;
          return <WrappedComponent {...rest}/>;

      }
    };
    return connect()(FetchedComponent);
  };
}
