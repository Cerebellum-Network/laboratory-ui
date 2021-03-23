import {call, put, takeLatest, all, select} from 'redux-saga/effects';

import Actions from './actions';
import {ServiceLocator, services} from './../../services/ServiceLocator';
import {ApplicationState} from '../../store/rootReducer';
import {AccountTransactionsWithTotal} from '../../models/AccountTransactionsWithTotal';

const accountTransactionsService = ServiceLocator.getInstance(services.LaboratoryApiService);

function* fetchTransactions(action) {
  try {
    const query = yield select((state: ApplicationState) => state.accountTransactions.searchAccount);
    const network = yield select((state: ApplicationState) => state.network.network);

    const limit = +process.env.REACT_APP_ROWS_ON_PAGE;
    const offset = (action.payload - 1) * limit;
    const itemsData: AccountTransactionsWithTotal = yield call(
      accountTransactionsService.fetchTransactions,
      query,
      network,
      offset,
      limit,
    );

    yield put(
      Actions['ACCOUNT_TRANSACTIONS/FETCHED_SUCCESSFULLY']({
        items: itemsData.data,
        itemsTotal: itemsData.total,
        balance: itemsData.balance,
      }),
    );
  } catch ({message}) {
    console.error(message);

    yield put(Actions['ACCOUNT_TRANSACTIONS/FETCHED_ERROR'](message));
  }
}

function* fetchLastSyncedBlock(action) {
  try {
    const network = yield select((state: ApplicationState) => state.network.network);
    const block = yield call(accountTransactionsService.fetchLastSyncedBlock, network);
    yield put(
      Actions['ACCOUNT_TRANSACTIONS/FETCHED_LAST_BLOCK_SUCCESSFULLY']({
        block: block.latestBlock,
      }),
    );
  } catch ({message}) {
    console.error(message);

    yield put(Actions['ACCOUNT_TRANSACTIONS/FETCHED_ERROR'](message));
  }
}

function* fetchTransactionsSaga() {
  yield takeLatest(Actions['ACCOUNT_TRANSACTIONS/FETCH'], fetchTransactions);
}

function* fetchLastSyncedBlockSaga() {
  yield takeLatest(Actions['ACCOUNT_TRANSACTION/LAST_SYNCED_BLOCK'], fetchLastSyncedBlock);
}
export default function* accountTransactionsSaga() {
  yield all([fetchTransactionsSaga(), fetchLastSyncedBlockSaga()]);
}
