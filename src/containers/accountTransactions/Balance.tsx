import {connect} from 'react-redux';

import {RootState} from "../../store/rootReducer";
import {Dispatch, AnyAction} from "redux";
import Balance from "../../components/accountTransactions/Balance";

const mapStateToProps = (state: RootState) => {
  return {
    balance: state.accountTransactions.balance,
    success: state.accountTransactions.success,
  }
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {};
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Balance);
