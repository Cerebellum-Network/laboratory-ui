import {call, put, takeLatest, all, select} from 'redux-saga/effects';

import Actions from './actions';
import {ServiceLocator, services} from './../../services/ServiceLocator';
import {ApplicationState} from '../../store/rootReducer';
import {Peer} from '../../models/Peers';

const accountTransactionsService = ServiceLocator.getInstance(services.LaboratoryApiService);

function* fetchPeers(action) {
  try {
    const query = yield select((state: ApplicationState) => state.peer.network);
    const itemsData: Peer = yield call(accountTransactionsService.getPeer);
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

function* fetchPeersSaga() {
  yield takeLatest(Actions['PEERS/FETCH'], fetchPeers);
}

export default function* peerSaga() {
  yield all([fetchPeersSaga()]);
}
