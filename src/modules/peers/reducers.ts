import update from 'immutability-helper';
import {Action, handleActions} from 'redux-actions';

import Actions from './actions';
import {Peer} from '../../models/Peers';

export interface PeersState {
  items: Peer[] | null;
  isLoading: boolean;
  errorMessage: string;
}

const initialState: PeersState = {
  items: [],
  errorMessage: '',
  isLoading: false,
};

const peersReducer = handleActions(
  {
    [Actions['PEERS/FETCH']]: (state: PeersState, action: Action<any>) => {
      return update(state, {
        $merge: {
          isLoading: true,
        },
      });
    },

    [Actions['PEERS/FETCHED_SUCCESSFULLY']]: (state: PeersState, action: Action<any>) => {
      return update(state, {
        $merge: {
          items: action.payload.items,
          isLoading: false,
        },
      });
    },
    [Actions['PEERS/FETCHED_ERROR']]: (state: PeersState, action: Action<any>) => {
      return update(state, {
        $merge: {
          errorMessage: action.payload,
          isLoading: false,
        },
      });
    },
  },
  initialState,
);

export default peersReducer;
