import {connect} from 'react-redux';

import {RootState} from '../../store/rootReducer';
import {Dispatch, AnyAction} from 'redux';
import Network from '../../components/network/Network';
import Actions from '../../modules/network/actions';

const mapStateToProps = (state: RootState) => {
  return {
    networkProvider: state.network.networkProvider,
  };
};
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    onNetworkChange: (value) => dispatch(Actions['NETWORK/NETWORK_CHANGE'](value)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Network);
