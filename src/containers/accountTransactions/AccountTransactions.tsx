import {connect} from 'react-redux';

import Actions from './../../modules/accountTransactions/actions';
import AccountTransactions from "../../components/accountTransactions/AccountTransactions";
import {RootState} from "../../store/rootReducer";
import {Dispatch, AnyAction} from "redux";

const mapStateToProps = (state: RootState) => {
  return {
    items: state.accountTransactions.items,
    searchAccount: state.accountTransactions.searchAccount,
    isLoading: state.accountTransactions.isLoading,
    errorMessage: state.accountTransactions.errorMessage,
  }
};
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    fetchTransactions: () => dispatch(Actions["ACCOUNT_TRANSACTIONS/FETCH"]()),
    onSearchAccountChanged: (value) => dispatch(Actions["ACCOUNT_TRANSACTIONS/ON_SEARCH_ACCOUNT_CHANGED"](value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(AccountTransactions);
