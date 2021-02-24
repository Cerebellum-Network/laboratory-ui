import {connect} from 'react-redux';

import {RootState} from "../../store/rootReducer";
import {Dispatch, AnyAction} from "redux";
import Balance from "../../components/balance/Balance";
import Actions from "../../modules/balance/actions";

const mapStateToProps = (state: RootState) => {
  return {
    accountKey: state.balance.accountKey,
    isLoading: state.balance.isLoading,
    errorMessage: state.balance.errorMessage,
    success: state.balance.success,
  }
};
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    submitForm: () => dispatch(Actions["BALANCE/SUBMIT"]()),
    onAccountKeyChanged: (value) => dispatch(Actions["BALANCE/ACCOUNT_CHANGED"](value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Balance);
