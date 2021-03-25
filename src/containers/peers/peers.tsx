import {connect} from 'react-redux';

import Actions from '../../modules/peers/actions';
import Peers from '../../components/peers/Peers';
import {RootState} from "../../store/rootReducer";
import {Dispatch, AnyAction} from "redux";

const mapStateToProps = (state: RootState) => {
  return {
    items: state.peer.items,
    network: state.network.network,
    treasuryBalance: state.peer.treasuryBalance,
    totalIssuance: state.peer.totalIssuance,
    isLoading: state.peer.isLoading,
    errorMessage: state.peer.errorMessage,
  }
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    fetchPeers: () => dispatch(Actions["PEERS/FETCH"]()),
    fetchTreasuryBalance: () => dispatch(Actions["PEERS/TREASURY_BALANCE"]()),
    fetchTotalIssuance: () => dispatch(Actions["PEERS/TOTAL_ISSUANCE"]()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Peers);
