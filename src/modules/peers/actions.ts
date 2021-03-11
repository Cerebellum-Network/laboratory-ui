import {createAction} from 'redux-actions';

interface Actions {
  [key: string]: any,
}

export default {
  'PEERS/FETCH': createAction('PEERS/FETCH'),
  'PEERS/FETCHED_SUCCESSFULLY': createAction('PEERS/FETCHED_SUCCESSFULLY'),
  'PEERS/FETCHED_ERROR': createAction('PEERS/FETCHED_ERROR'),
} as Actions;
