export function loadTypeGenerator(namespace) {
  return {
    PENDING: `${namespace}/LOAD_PENDING`,
    SUCCESS: `${namespace}/LOAD_SUCCESS`,
    ERROR: `${namespace}/LOAD_ERROR`,
  };
}

export function loadReducerGenerator(runner, TYPES) {
  const initialState = {
    loading: false,
    loaded: false,
  };

  runner.initialState = {
    ...initialState,
    ...runner.initialState,
  };

  runner.add(TYPES.PENDING, () => {
    return {loading: true};
  });

  runner.add(TYPES.SUCCESS, () => {
    return {loading: false, loaded: true};
  });

  runner.add(TYPES.ERROR, () => {
    return {loading: false, loaded: false};
  });
}


export default class ReducerRunner {
  constructor(state = {}) {
    this.initialState = state;
    this.reducers = {};
  }

  def(state) {
    return state;
  }

  get instance() {
    const runner = this;
    return (state = runner.initialState, action = {}) => {
      return action && action.type && runner.reducers.hasOwnProperty(action.type) ?
        runner.run(state, action) :
        runner.def(state);
    };
  }

  add(type, callback) {
    if (!this.reducers[type]) {
      this.reducers[type] = [];
    }
    this.reducers[type].push(callback);
  }

  run(state, action) {
    let nextState = state;
    this.reducers[action.type].forEach(
      (callback) => {
       const callbakState = callback(nextState, action)
       if ( callbakState.constructor.name === 'Object') {
        nextState = {
          ...nextState,
          ...callbakState
        };
       }
       else {
         nextState = callbakState;
       }

      });

    return nextState;
  }

  setLoadable(types) {
    loadReducerGenerator(this, types);
  }
}
