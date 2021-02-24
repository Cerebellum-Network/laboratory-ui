import {createAction} from 'redux-actions';

interface Actions {
  [key: string]: any;
}

export default {
  'BALANCE/SUBMIT': createAction('BALANCE/SUBMIT'),
  'BALANCE/SUBMIT_SUCCESSFULLY': createAction('BALANCE/SUBMIT_SUCCESSFULLY'),
  'BALANCE/SUBMIT_ERROR': createAction('BALANCE/SUBMIT_ERROR'),

  'BALANCE/ACCOUNT_CHANGED': createAction('BALANCE/ACCOUNT_CHANGED'),
} as Actions;
