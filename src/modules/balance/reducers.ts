import update from 'immutability-helper';
import {Action, handleActions} from 'redux-actions';

import Actions from './actions';

export interface BalanceState {
  accountKey: string,
  isLoading: boolean,
  errorMessage: string,
  success: boolean | null,
}

const initialState: BalanceState = {
  errorMessage: '',
  isLoading: false,
  accountKey: '',
  success: null,
};

const balanceReducer = handleActions({
  [Actions["BALANCE/SUBMIT"]]: (state: BalanceState, action: Action<any>) => {
    return update(state, {
      $merge: {
        isLoading: true,
        errorMessage: initialState.errorMessage,
        success: initialState.success,
      }
    });
  },
  [Actions["BALANCE/ACCOUNT_CHANGED"]]: (state: BalanceState, action: Action<any>) => {
    return update(state, {
      $merge: {
        accountKey: action.payload,
        errorMessage: initialState.errorMessage,
        success: initialState.success,
      }
    });
  },
  [Actions["BALANCE/SUBMIT_SUCCESSFULLY"]]: (state: BalanceState, action: Action<any>) => {
    return update(state, {
      $merge: {
        isLoading: false,
        success: true,
      }
    });
  },
  [Actions["BALANCE/SUBMIT_ERROR"]]: (state: BalanceState, action: Action<any>) => {
    return update(state, {
      $merge: {
        errorMessage: action.payload,
        isLoading: false,
      }
    });
  },
}, initialState);

export default balanceReducer;
