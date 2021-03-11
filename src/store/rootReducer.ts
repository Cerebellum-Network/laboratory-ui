import {combineReducers} from 'redux';

import accountTransactions, {AccountTransactionsState} from './../modules/accountTransactions/reducers';
import friendBot, {FriendBotState} from '../modules/friendBot/reducers';
import peer, {PeersState} from '../modules/peers/reducers';
import network, {NetworkState} from '../modules/network/reducers';

export interface ApplicationState {
  accountTransactions: AccountTransactionsState;
  friendBot: FriendBotState;
  peer: PeersState;
  network: NetworkState;
}

const rootReducer = combineReducers<ApplicationState>({
  accountTransactions,
  friendBot,
  peer,
  network,
});

export default rootReducer;

export type RootState = ReturnType<typeof rootReducer>;
