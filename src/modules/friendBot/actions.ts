import {createAction} from 'redux-actions';

interface Actions {
  [key: string]: any,
}

export default {
  'FRIEND_BOT/SUBMIT': createAction('FRIEND_BOT/SUBMIT'),
  'FRIEND_BOT/SUBMIT_SUCCESSFULLY': createAction('FRIEND_BOT/SUBMIT_SUCCESSFULLY'),
  'FRIEND_BOT/SUBMIT_ERROR': createAction('FRIEND_BOT/SUBMIT_ERROR'),

  'FRIEND_BOT/ACCOUNT_CHANGED': createAction('FRIEND_BOT/ACCOUNT_CHANGED'),
} as Actions;