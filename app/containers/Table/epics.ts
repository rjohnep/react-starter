import { Epic, ofType } from 'redux-observable';
import { switchMap, map } from 'rxjs/operators';
import { getType } from 'typesafe-actions';

import { fetchDataRequest, fetchDataReceive } from './actions';

// contrived example!!!
const fetchDataAction: Epic = (action$, state$) =>
  action$.pipe(
    ofType(getType(fetchDataRequest)),
    switchMap(action => {
      console.log(`action type must be ${action.type}`);
      return Promise.resolve(['huibala', 'W - yeah']);
    }),
    map(data => {
      console.log(data);

      return fetchDataReceive(data);
    })
  );

export default [fetchDataAction];
