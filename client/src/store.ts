import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
// import { rootSaga } from './rootSaga';
import { rootReducer } from './rootReducer';
import { RootState } from './RootState';
import { routerMiddleware } from 'react-router-redux';
import { createBrowserHistory } from 'history';

const sagaMiddleware = createSagaMiddleware();

const configureStore = () => {
    const middleware = [routerMiddleware(createBrowserHistory())];

    const composeEnhancers = (window as any).__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
    const store = createStore(rootReducer, composeEnhancers(applyMiddleware(...middleware)));

    return store;
};

export const store = configureStore();
