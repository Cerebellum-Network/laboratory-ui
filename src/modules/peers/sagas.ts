import {call, put, takeLatest, all, select} from 'redux-saga/effects';

import Actions from './actions';
import {ServiceLocator, services} from '../../services/ServiceLocator';
import {ApplicationState} from '../../store/rootReducer';
import {Peer} from '../../models/Peers';

const accountTransactionsService = ServiceLocator.getInstance(services.LaboratoryApiService);

function* fetchPeers(action) {
  try {
    const network = yield select((state: ApplicationState) => state.network.network);
    const itemsData: Peer = yield call(accountTransactionsService.getPeer, network);
    yield put(
      Actions['PEERS/FETCHED_SUCCESSFULLY']({
        items: itemsData,
      }),
    );
  } catch ({message}) {
    console.error(message);

    yield put(Actions['PEERS/FETCHED_ERROR'](message));
  }
}

function* fetchTreasuryBalance(action) {
  try {
    const network = yield select((state: ApplicationState) => state.network.network);
    const itemsData = yield call(accountTransactionsService.treasuryBalance, network);
    yield put(
      Actions['PEERS/TREASURY_BALANCE_FETCHED_SUCCESSFULLY']({
        items: itemsData,
      }),
    );
  } catch ({message}) {
    console.error(message);
    yield put(Actions['PEERS/TREASURY_BALANCE_FETCHED_ERROR'](message));
  }
}

function* fetchTotalIssuance(action) {
  try {
    const network = yield select((state: ApplicationState) => state.network.network);
    const itemsData = yield call(accountTransactionsService.totalIssuance, network);
    yield put(
      Actions['PEERS/TOTAL_ISSUANCE_FETCHED_SUCCESSFULLY']({
        items: itemsData,
      }),
    );
  } catch ({message}) {
    console.error(message);
    yield put(Actions['PEERS/TOTAL_ISSUANCE_FETCHED_ERROR'](message));
  }
}

function* fetchPeersSaga() {
  yield takeLatest(Actions['PEERS/FETCH'], fetchPeers);
}

function* fetchTreasuryBalanceSaga() {
  yield takeLatest(Actions['PEERS/TREASURY_BALANCE'], fetchTreasuryBalance);
}

function* fetchTotalIssuanceSaga() {
  yield takeLatest(Actions['PEERS/TOTAL_ISSUANCE'], fetchTotalIssuance);
}

export default function* peerSaga() {
  yield all([fetchPeersSaga(), fetchTreasuryBalanceSaga(), fetchTotalIssuanceSaga()]);
}
