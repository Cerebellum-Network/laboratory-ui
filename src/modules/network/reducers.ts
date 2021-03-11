import update from 'immutability-helper';
import {Action, handleActions} from 'redux-actions';

import Actions from './actions';

export interface NetworkState {
  networkProvider: string;
  network: string;

}

const initialState: NetworkState = {
  networkProvider: 'wss://testnet-node-1.cere.network:9944',
  network: 'Testnet'
};

const networkReducer = handleActions(
  {
    [Actions['NETWORK/NETWORK_CHANGE']]: (state: NetworkState, action: Action<any>) => {
      return update(state, {
        $merge: {
          networkProvider: action.payload,
        },
      });
    },
  },
  initialState,
);

export default networkReducer;
