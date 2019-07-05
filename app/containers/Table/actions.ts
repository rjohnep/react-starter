import { createStandardAction } from 'typesafe-actions';

import { ITableRow } from './types';

export const fetchDataRequest = createStandardAction(
  '[TABLE]: fetch_data_request'
)<void>();
export const fetchDataReceive = createStandardAction(
  '[TABLE]: fetch_data_receive'
)<ITableRow[]>();
