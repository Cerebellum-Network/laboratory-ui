import {connect} from 'react-redux';

import Actions from './../../modules/accountTransactions/actions';
import {RootState} from "../../store/rootReducer";
import {Dispatch, AnyAction} from "redux";
import LastBlock from "../../components/accountTransactions/LastBlock";

const mapStateToProps = (state: RootState) => {
  return {
    block: state.accountTransactions.block,
  }
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    fetchLastSyncedBlock: () => dispatch(Actions["ACCOUNT_TRANSACTION/LAST_SYNCED_BLOCK"]()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(LastBlock);
