import {connect} from 'react-redux';

import Actions from '../../modules/peers/actions';
import Peers from '../../components/peers/Peers';
import {RootState} from '../../store/rootReducer';
import {Dispatch, AnyAction} from 'redux';

const mapStateToProps = (state: RootState) => {
  return {
    items: state.peer.items,
    ddcMetrics: state.peer.ddcMetrics,
    network: state.network.network,
    isLoading: state.peer.isLoading,
    errorMessage: state.peer.errorMessage,
  };
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    fetchPeers: () => dispatch(Actions['PEERS/FETCH']()),
    fetchDdcMetrics: () => dispatch(Actions['PEERS/DDC_METRICS']()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Peers);
