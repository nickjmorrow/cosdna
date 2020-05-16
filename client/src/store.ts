import { applyMiddleware, compose, createStore } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { routerMiddleware } from 'connected-react-router';
import { createBrowserHistory } from 'history';
import { RootState } from '~/RootState';
import { createRootReducer } from '~/createRootReducer';
import { rootSaga } from '~/rootSaga';

const sagaMiddleware = createSagaMiddleware();
export const history = createBrowserHistory({ basename: '/' });

const configureStore = (initialState: RootState) => {
    const middleware = [sagaMiddleware, routerMiddleware(history)];

    // In development, use the browser's Redux dev tools extension if installed
    const enhancers = [];
    const isDevelopment = process.env.NODE_ENV === 'development';
    if (isDevelopment && typeof window !== 'undefined' && (window as any).__REDUX_DEVTOOLS_EXTENSION__) {
        enhancers.push((window as any).__REDUX_DEVTOOLS_EXTENSION__());
    }

    const intermediateStore = createStore(
        createRootReducer(history),
        initialState,
        compose(applyMiddleware(...middleware), ...enhancers),
    );

    sagaMiddleware.run(rootSaga);

    return intermediateStore;
};

export const store = configureStore((window as any).initialReduxState);
