import { ActionType } from 'typesafe-actions';

import { fetchDataReceive } from './actions';

export interface ITableState {
  readonly data: ITableRow[];
  readonly loading: boolean;
}

export interface ITableRow {
  readonly id: number;
  readonly text: string;
  readonly value: string;
}

const actions = {
  fetchDataReceive
};
export type TAction = ActionType<typeof actions>;
