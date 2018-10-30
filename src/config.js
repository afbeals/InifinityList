import createSagaMiddleware from "redux-saga";
import { createStore, combineReducers, applyMiddleware } from "redux";
import rootReducer from "./modules/rootReducer";
import rootSaga from "./modules/rootSaga";

const reducers = combineReducers({
  ...rootReducer
});
const sagaMiddleware = createSagaMiddleware();
const store = createStore(reducers, {}, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);

export { store };
