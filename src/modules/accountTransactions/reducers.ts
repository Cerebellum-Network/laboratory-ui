import update from 'immutability-helper';
import {Action, handleActions} from 'redux-actions';

import Actions from './actions';
import {AccountTransaction} from "../../models/AccountTransaction";

export interface AccountTransactionsState {
  items: AccountTransaction[] | null,
  itemsTotal: number,
  searchAccount: string,
  isLoading: boolean,
  errorMessage: string,
  currentPage: number,
}

const initialState: AccountTransactionsState = {
  items: [],
  errorMessage: '',
  isLoading: false,
  searchAccount: '',
  currentPage: 1,
  itemsTotal: 0,
};

const accountTransactionsReducer = handleActions({
  [Actions["ACCOUNT_TRANSACTIONS/FETCH"]]: (state: AccountTransactionsState, action: Action<any>) => {
    return update(state, {
      $merge: {
        isLoading: true,
        currentPage: action.payload,
      }
    });
  },
  [Actions["ACCOUNT_TRANSACTIONS/ON_SEARCH_ACCOUNT_CHANGED"]]: (state: AccountTransactionsState, action: Action<any>) => {
    return update(state, {
      $merge: {
        searchAccount: action.payload,
      }
    });
  },
  [Actions["ACCOUNT_TRANSACTIONS/FETCHED_SUCCESSFULLY"]]: (state: AccountTransactionsState, action: Action<any>) => {
    return update(state, {
      $merge: {
        items: action.payload.items,
        isLoading: false,
        itemsTotal: action.payload.itemsTotal,
      }
    });
  },
  [Actions["ACCOUNT_TRANSACTIONS/FETCHED_ERROR"]]: (state: AccountTransactionsState, action: Action<any>) => {
    return update(state, {
      $merge: {
        errorMessage: action.payload,
        isLoading: false,
      }
    });
  },
}, initialState);

export default accountTransactionsReducer;
