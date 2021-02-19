import {call, put, takeLatest, all, select} from 'redux-saga/effects';

import Actions from './actions';
import {ServiceLocator, services} from './../../services/ServiceLocator';
import {ApplicationState} from "../../store/rootReducer";
import {AccountTransactionsWithTotal} from "../../models/AccountTransactionsWithTotal";

const laboratoryApiService = ServiceLocator.getInstance(services.LaboratoryApiService);

 function* submitAssetRequest(action) {
  try {
    const query = yield select((state: ApplicationState) => state.friendBot.accountKey);

    const itemsData: AccountTransactionsWithTotal = yield call(laboratoryApiService.postFriendBotAssetRequest, query);

    yield put(Actions['FRIEND_BOT/SUBMIT_SUCCESSFULLY']());
  } catch ({message}) {
    // TODO: Add logger
    console.error(message);

    yield put(Actions['FRIEND_BOT/SUBMIT_ERROR'](message));
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
