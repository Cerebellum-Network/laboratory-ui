import {connect} from 'react-redux';
import Actions from '../../modules/peers/actions';
import {RootState} from '../../store/rootReducer';
import {Dispatch, AnyAction} from 'redux';
import TotalIssuance from '../../components/peers/TotalIssuance';

const mapStateToProps = (state: RootState) => {
  return {
    network: state.network.network,
    totalIssuance: state.peer.totalIssuance,
    success: state.peer.success,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    fetchTotalIssuance: () => dispatch(Actions['PEERS/TOTAL_ISSUANCE']()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(TotalIssuance);
