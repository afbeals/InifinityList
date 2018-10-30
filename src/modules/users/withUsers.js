import React from "react";
import PropTypes from "prop-types";
import { connect } from "react-redux";
import * as selectors from "./selectors";
import actions from "./actions";

export default function withUsers(WrappedComponent) {
  const mapStateToProps = state => ({
    getUserState: selectors.getUserState(state),
    getUserError: selectors.getUserError(state),
    getIsUserLoading: selectors.getIsUserLoading(state),
    getIsUserLoaded: selectors.getIsUserLoaded(state),
    getSelectedUserId: selectors.getSelectedUserId(state),
    getUserList: selectors.getUserList(state),
    getSelectedUser: selectors.getSelectedUser(state)
  });

  const mapDispatchToProps = dispatch => ({
    handleFetchUser: () => {
      dispatch(actions.fetchUserList());
    },
    handleSelectdUser: selectedId => {
      dispatch(actions.handleSelectUser(selectedId));
    },
    handleClearSelectedUser: () => {
      dispatch(actions.clearSelectedUser());
    },
    handleClearUserList: () => {
      dispatch(actions.clearUserList());
    },
    handleRestStore: () => {
      dispatch(actions.resetStore());
    }
  });

  WrappedComponent.propTypes = {
    getUserState: PropTypes.object.isRequired,
    getUserError: PropTypes.string,
    getIsUserLoading: PropTypes.bool.isRequired,
    getIsUserLoaded: PropTypes.bool.isRequired,
    getSelectedUserId: PropTypes.string,
    getUserList: PropTypes.object,
    getSelectedUser: PropTypes.object,
    handleFetchUser: PropTypes.func.isRequired,
    handleSelectdUser: PropTypes.func.isRequired,
    handleClearSelectedUser: PropTypes.func.isRequired,
    handleClearUserList: PropTypes.func.isRequired,
    handleRestStore: PropTypes.func.isRequired
  };

  return connect(
    mapStateToProps,
    mapDispatchToProps
  )(withUsers);
}
