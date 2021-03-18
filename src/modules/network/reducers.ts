import update from 'immutability-helper';
import {Action, handleActions} from 'redux-actions';
import {Networks} from '../../components/network/network.enum';

import Actions from './actions';

export interface NetworkState {
  network: string;
}

const initialState: NetworkState = {
  network: Networks.testnet,
};

const networkReducer = handleActions(
  {
    [Actions['NETWORK/NETWORK_CHANGE']]: (state: NetworkState, action: Action<any>) => {
      return update(state, {
        $merge: {
          network: action.payload,
        },
      });
    },
  },
  initialState,
);

export default networkReducer;
