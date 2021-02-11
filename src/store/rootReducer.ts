import {combineReducers} from 'redux';

import accountTransactions, {AccountTransactionsState} from './../modules/accountTransactions/reducers';

export interface ApplicationState {
  accountTransactions: AccountTransactionsState;
}

const rootReducer = combineReducers<ApplicationState>({
  accountTransactions,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
