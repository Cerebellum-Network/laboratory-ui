import {call, put, takeLatest, all, select} from 'redux-saga/effects';

import Actions from './actions';
import {ServiceLocator, services} from './../../services/ServiceLocator';
import {ApplicationState} from "../../store/rootReducer";

const laboratoryApiService = ServiceLocator.getInstance(services.LaboratoryApiService);

 function* submitAssetRequest() {
  try {
    const query = yield select((state: ApplicationState) => state.friendBot.accountKey);
    const network = yield select((state: ApplicationState) => state.network.network);

    yield call(laboratoryApiService.postFriendBotAssetRequest, query, network);

    yield put(Actions['FRIEND_BOT/SUBMIT_SUCCESSFULLY']());
  } catch ({message, response}) {
    console.error(message);

    yield put(Actions['FRIEND_BOT/SUBMIT_ERROR'](response && response.data && response.data.message || message));
  }
}

function* submitAssetRequestSaga() {
  yield takeLatest(Actions['FRIEND_BOT/SUBMIT'], submitAssetRequest);
}

export default function* friendBotSaga() {
  yield all([
    submitAssetRequestSaga(),
  ]);
};
