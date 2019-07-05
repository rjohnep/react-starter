import { ITableState } from './types';

export default class TableModel {
  static get initialState(): ITableState {
    return {
      data: [],
      loading: false
    };
  }
}
