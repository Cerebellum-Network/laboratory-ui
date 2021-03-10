import {combineReducers} from 'redux';

import accountTransactions, {AccountTransactionsState} from './../modules/accountTransactions/reducers';
import friendBot, { FriendBotState } from '../modules/friendBot/reducers';
import peer, {PeersState} from '../modules/peers/reducers'

export interface ApplicationState {
  accountTransactions: AccountTransactionsState;
  friendBot: FriendBotState;
  peer: PeersState;
}

const rootReducer = combineReducers<ApplicationState>({
  accountTransactions,
  friendBot,
  peer
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
