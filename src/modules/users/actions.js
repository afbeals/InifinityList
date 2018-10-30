import actionTypes from "./actionTypes";

const actions = {
  fetchUserList: () => ({
    type: actionTypes.FETCH_REQUEST
  }),
  fetchUserListFail: msg => ({
    type: actionTypes.FETCH_FAIL,
    payload: {
      clientMessage: "Failed to fetch users",
      devMessage: msg
    }
  }),
  fetchUserListSuccess: userList => ({
    type: actionTypes.FETCH_SUCCESS,
    payload: userList
  }),
  selectUser: userId => ({
    type: actionTypes.SELECT_USER,
    payload: userId
  }),
  clearSelectedUser: () => ({
    type: actionTypes.CLEAR_SELECTED_USER
  }),
  clearUserList: () => ({
    type: actionTypes.CLEAR_USER_LIST
  }),
  resetStore: () => ({
    type: actionTypes.RESET
  })
};

export default actions;
