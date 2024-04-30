import createSagaMiddleware, { Task } from 'redux-saga';
import { createStore, applyMiddleware } from 'redux';
// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { logger } from 'redux-logger';
import { all } from 'redux-saga/effects';
import rootReducer from './reducer';
import rootSaga from './saga';

function* _rootSaga() {
  yield all(rootSaga);
}
const sagaMiddleware = createSagaMiddleware();
const middlewares = [sagaMiddleware];
// middlewares.push(logger);
const ReduxStore = createStore(rootReducer, applyMiddleware(...middlewares));

const rootSagaTask: Task = sagaMiddleware.run(_rootSaga);
rootSagaTask.toPromise().catch((error) => {
  console.log('SAGA --->>   ERROR ', error);
  console.error('SAGA --->>   ERROR ', error);
});

export default ReduxStore;
