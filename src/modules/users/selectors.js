import { createSelector } from "reselect";
import normalize from "../../util/normalize";

export const getRootState = state => state.user;

export const getUserState = createSelector(
  [getRootState],
  rootState => rootState
);

export const getUserError = createSelector(
  [getRootState],
  rootState => rootState.error
);

export const getIsUserLoading = createSelector(
  [getRootState],
  rootState => rootState.isLoading
);

export const getIsUserLoaded = createSelector(
  [getRootState],
  rootState => rootState.isLoaded
);

export const getSelectedUserId = createSelector(
  [getRootState],
  rootState => rootState.selectedUser
);

export const getUserList = createSelector(
  [getRootState],
  rootState => rootState.userList
);

export const getSelectedUser = createSelector(
  [getSelectedUserId, getUserList],
  (id, list) => {
    if (!id) return null;
    return list[id];
  }
);

export const getUserListInArray = createSelector([getUserList], userList =>
  normalize.indexedToArray({
    indexedList: userList,
    sort: "asc",
    sortField: "last_name"
  })
);
