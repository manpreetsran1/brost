import {createStore,applyMiddleware} from "redux";
import createSagaMiddleware from "redux-saga";
import rootReducer from "../Reducer/Index";
import Saga from "../Saga/Saga";
import contactSaga from "../Saga/ContactSaga";

const SagaMiddleware= createSagaMiddleware();

export default function configureStore() {
    const store = createStore(rootReducer, applyMiddleware(SagaMiddleware))
    SagaMiddleware.run(Saga)
    return store
  }

