import { createReducer, getType } from 'typesafe-actions';

import { ITableState, TAction } from './types';
import { fetchDataReceive } from './actions';
import TableModel from './model';

const initialState = TableModel.initialState;

export default createReducer<ITableState, TAction>(initialState).handleAction(
  getType(fetchDataReceive),
  (state, action) => {
    return {
      ...state,
      data: action.payload
    };
  }
);
