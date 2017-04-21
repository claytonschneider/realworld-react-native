import createLogger from 'redux-logger';
import thunk from 'redux-thunk';
import { createStore, applyMiddleware } from 'redux';
import rootReducer from '../reducers';

export default function configureStore(initialState = {}) {
  const isDebuggingInChrome = __DEV__ && !!window.navigator.userAgent;

  // Only apply the redux logger middleware in chrome debug.
  // Using on the actual device will create performance issues, b/c printing is expensive.
  const logger = createLogger({
    predicate: () => isDebuggingInChrome,
    collapsed: true,
    duration: true
  });

  const store = createStore(
    rootReducer,
    initialState,
    applyMiddleware(thunk, logger)
  );

  if (module.hot) {
    module.hot.accept(() => {
      const nextRootReducer = require('../reducers/index').default;
      store.replaceReducer(nextRootReducer);
    });
  }

  return store;
}
