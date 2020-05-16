import ReactDOM from 'react-dom';
import React from 'react';
import { Provider } from 'react-redux';
import { store, history } from './store';
import App from './components/App';
import { ConnectedRouter } from 'connected-react-router';

ReactDOM.render(
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <App />
        </ConnectedRouter>
    </Provider>,
    document.querySelector('#container'),
);

if (module && module.hot) {
    module.hot.accept();

    module.hot.addStatusHandler(status => {
        if (status === 'prepare') console.clear();
    });
}
