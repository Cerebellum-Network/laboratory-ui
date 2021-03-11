import {createAction} from 'redux-actions';

interface Actions {
  [key: string]: any;
}

export default {
  'NETWORK/NETWORK_CHANGE': createAction('NETWORK/NETWORK_CHANGE'),
} as Actions;
