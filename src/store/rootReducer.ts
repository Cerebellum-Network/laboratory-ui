import {combineReducers} from 'redux';

import accountTransactions, {AccountTransactionsState} from './../modules/accountTransactions/reducers';
import friendBot, {FriendBotState} from '../modules/friendBot/reducers';
import balance, {BalanceState} from '../modules/balance/reducers';

export interface ApplicationState {
  accountTransactions: AccountTransactionsState;
  friendBot: FriendBotState;
  balance: BalanceState;
}

const rootReducer = combineReducers<ApplicationState>({
  accountTransactions,
  friendBot,
  balance,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
