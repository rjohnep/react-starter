import { createStore, applyMiddleware, compose } from 'redux';
import { routerMiddleware } from 'connected-react-router';
import { createEpicMiddleware, ofType } from 'redux-observable';

import createReducer from './reducers';
import rootEpic from './epics';
import { BehaviorSubject } from 'rxjs';
import { takeUntil, mergeMap } from 'rxjs/operators';

export default function configureStore(initialState = {}, history) {
  let composeEnhancers = compose;

  // If Redux Dev Tools and Saga Dev Tools Extensions are installed, enable them
  /* istanbul ignore next */
  console.log(process.env.NODE_ENV);
  if (process.env.NODE_ENV !== 'production' && typeof window === 'object') {
    /* eslint-disable no-underscore-dangle */
    if (window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)
      composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__({});
  }

  const epicMiddleware = createEpicMiddleware();

  const middlewares = [epicMiddleware, routerMiddleware(history)];

  const enhancers = [applyMiddleware(...middlewares)];

  const store = createStore(
    createReducer(),
    initialState,
    composeEnhancers(...enhancers)
  );

  const epic$ = new BehaviorSubject(rootEpic);
  // Since we're using mergeMap, by default any new
  // epic that comes in will be merged into the previous
  // one, unless an EPIC_END action is dispatched first,
  // which would cause the old one(s) to be unsubscribed
  const hotReloadingEpic = (action$, ...rest) =>
    epic$.pipe(
      mergeMap(epic =>
        epic(action$, ...rest).pipe(takeUntil(action$.pipe(ofType('EPIC_END'))))
      )
    );

  epicMiddleware.run(hotReloadingEpic);
  // Extensions
  store.injectedReducers = {}; // Reducer registry

  // Make reducers hot reloadable, see http://mxs.is/googmo
  /* istanbul ignore next */
  if (module.hot) {
    module.hot.accept(['./reducers', './epics'], () => {
      const nextRootEpic = require('./epics').rootEpic;

      store.dispatch({ type: 'EPIC_END' });

      epic$.next(nextRootEpic);

      store.replaceReducer(createReducer(store.injectedReducers));
    });
  }

  return store;
}
