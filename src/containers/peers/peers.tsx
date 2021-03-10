import {connect} from 'react-redux';

import Actions from './../../modules/peers/actions';
import Peers from '../../components/peers/Peers';
import {RootState} from "../../store/rootReducer";
import {Dispatch, AnyAction} from "redux";

const mapStateToProps = (state: RootState) => {
  return {
    items: state.peer.items,
    network: state.peer.network,
    isLoading: state.peer.isLoading,
    errorMessage: state.peer.errorMessage,
  }
};

const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    fetchPeers: () => dispatch(Actions["PEERS/FETCH"]()),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(Peers);
