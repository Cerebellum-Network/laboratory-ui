import update from 'immutability-helper';
import {Action, handleActions} from 'redux-actions';

import Actions from './actions';

export interface FriendBotState {
  accountKey: string,
  isLoading: boolean,
  errorMessage: string,
  success: boolean | null,
}

const initialState: FriendBotState = {
  errorMessage: '',
  isLoading: false,
  accountKey: '',
  success: null,
};

const friendBotReducer = handleActions({
  [Actions["FRIEND_BOT/SUBMIT"]]: (state: FriendBotState, action: Action<any>) => {
    return update(state, {
      $merge: {
        isLoading: true,
        errorMessage: initialState.errorMessage,
        success: initialState.success,
      }
    });
  },
  [Actions["FRIEND_BOT/ACCOUNT_CHANGED"]]: (state: FriendBotState, action: Action<any>) => {
    return update(state, {
      $merge: {
        accountKey: action.payload,
        errorMessage: initialState.errorMessage,
        success: initialState.success,
      }
    });
  },
  [Actions["FRIEND_BOT/SUBMIT_SUCCESSFULLY"]]: (state: FriendBotState, action: Action<any>) => {
    return update(state, {
      $merge: {
        isLoading: false,
        success: true,
      }
    });
  },
  [Actions["FRIEND_BOT/SUBMIT_ERROR"]]: (state: FriendBotState, action: Action<any>) => {
    return update(state, {
      $merge: {
        errorMessage: action.payload,
        isLoading: false,
      }
    });
  },
}, initialState);

export default friendBotReducer;