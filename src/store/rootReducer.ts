import {combineReducers} from 'redux';

import accountTransactions, {AccountTransactionsState} from './../modules/accountTransactions/reducers';
import friendBot, {FriendBotState} from "../modules/friendBot/reducers";

export interface ApplicationState {
  accountTransactions: AccountTransactionsState;
  friendBot: FriendBotState;
}

const rootReducer = combineReducers<ApplicationState>({
  accountTransactions,
  friendBot,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
