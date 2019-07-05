import { combineEpics } from 'redux-observable';
import { BehaviorSubject } from 'rxjs';
import { mergeMap } from 'rxjs/operators';

export const epic$ = new BehaviorSubject(combineEpics());
const rootEpic = (action$, state$) =>
  epic$.pipe(mergeMap(epic => epic(action$, state$)));

export default rootEpic;
