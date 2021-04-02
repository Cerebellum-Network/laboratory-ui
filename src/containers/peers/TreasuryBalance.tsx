import {connect} from 'react-redux';
import Actions from '../../modules/peers/actions';
import {RootState} from '../../store/rootReducer';
import {Dispatch, AnyAction} from 'redux';
import TreasuryBalance from '../../components/peers/TreasuryBalance';

const mapStateToProps = (state: RootState) => {
  return {
    network: state.network.network,
    treasuryBalance: state.peer.treasuryBalance,
    TreasuryBalSuccess: state.peer.TreasuryBalSuccess,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    fetchTreasuryBalance: () => dispatch(Actions['PEERS/TREASURY_BALANCE']()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TreasuryBalance);
