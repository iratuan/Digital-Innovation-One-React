import {createStore, applyMiddleware} from 'redux';
import CreateSagaMiddleware from 'redux-saga';
import saga from './modules/cart/saga';
import rootReducer from './modules/rootReducer';
import rootSaga from './modules/rootSaga';

const sagaMiddleware = CreateSagaMiddleware();

const store = createStore(rootReducer, applyMiddleware(sagaMiddleware));
sagaMiddleware.run(rootSaga);
export default store;
