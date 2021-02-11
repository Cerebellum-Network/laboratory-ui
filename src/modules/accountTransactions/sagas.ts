import {call, put, takeLatest, all} from 'redux-saga/effects';

import Actions from './actions';
import {ServiceLocator, services} from './../../services/ServiceLocator';

const accountTransactionsService = ServiceLocator.getInstance(services.AccountTransactionsService);

 function* fetchTransactions(action) {
  try {
    const data = yield call(accountTransactionsService.fetchTransactions);

    yield put(Actions['ACCOUNT_TRANSACTIONS/FETCHED_SUCCESSFULLY'](data));
  } catch ({message}) {
    // TODO: Add logger
    console.error(message);

    yield put(Actions['ACCOUNT_TRANSACTIONS/FETCHED_ERROR'](message));
  }
}

function* fetchTransactionsSaga() {
  yield takeLatest(Actions['ACCOUNT_TRANSACTIONS/FETCH'], fetchTransactions);
}

export default function* accountTransactionsSaga() {
  yield all([
    fetchTransactionsSaga(),
  ]);
};
