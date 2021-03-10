import {connect} from 'react-redux';

import {RootState} from "../../store/rootReducer";
import {Dispatch, AnyAction} from "redux";
import FriendBot from "../../components/friendBot/FriendBot";
import Actions from "../../modules/friendBot/actions";

const mapStateToProps = (state: RootState) => {
  return {
    accountKey: state.friendBot.accountKey,
    isLoading: state.friendBot.isLoading,
    network: state.friendBot.network,
    errorMessage: state.friendBot.errorMessage,
    success: state.friendBot.success,
  }
};
const mapDispatchToProps = (dispatch: Dispatch<AnyAction>) => {
  return {
    submitForm: () => dispatch(Actions["FRIEND_BOT/SUBMIT"]()),
    onAccountKeyChanged: (value) => dispatch(Actions["FRIEND_BOT/ACCOUNT_CHANGED"](value)),
    onNetworkChanged: (value) => dispatch(Actions["FRIEND_BOT/NETWORK_CHANGED"](value)),
  };
};

export default connect(
  mapStateToProps,
  mapDispatchToProps,
)(FriendBot);
