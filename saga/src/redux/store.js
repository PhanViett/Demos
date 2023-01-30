import postsSaga from '../saga';
import rootReducer from './rootReducer';
import createSagaMiddleware from 'redux-saga';
import { applyMiddleware, createStore } from 'redux';


const sagaMiddleware = createSagaMiddleware();
const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(postsSaga);

export default store;