import { call, put, takeLatest } from "redux-saga/effects";
import actionTypes from "./actionTypes";
import actions from "./actions";
import api from "../../util/api";
import normalize from "../../util/normalize";
// WATCHERS
export function* watchRequestToFetchUsers() {
  yield takeLatest(actionTypes.FETCH_REQUEST, fetch);
}

export function* watchForAppInit() {
  yield takeLatest("@@redux/INIT", fetch);
}

// PROMISES
export function* fetch() {
  try {
    const request = {
        client: {
          clientId: 123,
          sessionId: "afj23rqjj22f23r23"
        }
      },
      response = yield call(api.fetchUsers, { request }),
      users = normalize.arrayToIndexed(response.data);
    yield put(actions.resetStore());
    yield put(actions.fetchUserListSuccess(users));
  } catch (e) {
    yield put(actions.fetchUserListFail(e));
  }
}
