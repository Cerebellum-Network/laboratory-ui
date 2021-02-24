import {call, put, takeLatest, all, select} from 'redux-saga/effects';

import Actions from './actions';
import {ServiceLocator, services} from './../../services/ServiceLocator';
import {ApplicationState} from '../../store/rootReducer';
import {Balance} from '../../models/Balance';

const laboratoryApiService = ServiceLocator.getInstance(services.LaboratoryApiService);

function* submitAssetRequest(action) {
  try {
    const query = yield select((state: ApplicationState) => state.balance.accountKey);

    const itemsData: Balance = yield call(laboratoryApiService.getBalance, query);

    yield put(Actions['BALANCE/SUBMIT_SUCCESSFULLY']());
  } catch ({message}) {
    // TODO: Add logger
    console.error(message);

    yield put(Actions['BALANCE/SUBMIT_ERROR'](message));
  }
}

function* submitAssetRequestSaga() {
  yield takeLatest(Actions['BALANCE/SUBMIT'], submitAssetRequest);
}

export default function* balanceSaga() {
  yield all([submitAssetRequestSaga()]);
}
