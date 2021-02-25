import {connect} from 'react-redux';

import Actions from './../../modules/accountTransactions/actions';
import AccountTransactions from "../../components/accountTransactions/AccountTransactions";
import {RootState} from "../../store/rootReducer";
import {Dispatch, AnyAction} from "redux";

const mapStateToProps = (state: RootState) => {
  return {
    items: state.accountTransactions.items,
    itemsTotal: state.accountTransactions.itemsTotal,
    searchAccount: state.accountTransactions.searchAccount,
    isLoading: state.accountTransactions.isLoading,
    errorMessage: state.accountTransactions.errorMessage,
    currentPage: state.accountTransactions.currentPage,
  }
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    fetchTransactions: (page: number) => dispatch(Actions["ACCOUNT_TRANSACTIONS/FETCH"](page)),
    onSearchAccountChanged: (value) => dispatch(Actions["ACCOUNT_TRANSACTIONS/ON_SEARCH_ACCOUNT_CHANGED"](value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountTransactions);
