import update from 'immutability-helper';
import {Action, handleActions} from 'redux-actions';

import Actions from './actions';
import {Peer} from '../../models/Peers';

export interface PeersState {
  items: Peer[] | null;
  treasuryBalance: string;
  totalIssuance: string;
  isLoading: boolean;
  errorMessage: string;
}

const initialState: PeersState = {
  items: [],
  treasuryBalance: '',
  totalIssuance: '',
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

    [Actions['PEERS/TREASURY_BALANCE_FETCHED_SUCCESSFULLY']]: (state: PeersState, action: Action<any>) => {
      return update(state, {
        $merge: {
         treasuryBalance : action.payload.items,
        },
      });
    },

    [Actions['PEERS/TOTAL_ISSUANCE_FETCHED_SUCCESSFULLY']]: (state: PeersState, action: Action<any>) => {
      return update(state, {
        $merge: {
         totalIssuance : action.payload.items,
        },
      });
    },
  },
  initialState,
);

export default peersReducer;
