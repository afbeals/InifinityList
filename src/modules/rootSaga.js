import { all } from "redux-saga/effects";
import { watchRequestToFetchUsers as fetchUsers } from "./users/sagas";
import { watchForAppInit as applistener } from "./users/sagas";

export default function* rootSaga() {
  yield all([fetchUsers(), applistener()]);
}
