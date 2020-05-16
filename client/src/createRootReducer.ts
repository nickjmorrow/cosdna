import { combineReducers } from 'redux';
import { todosReducer } from './todos/todosReducer';
import { productsReducer } from '~/products/products.reducer';
import { connectRouter } from 'connected-react-router';
import { History } from 'history';

export const createRootReducer = (history: History) =>
    combineReducers({
        todos: todosReducer,
        products: productsReducer,
        router: connectRouter(history),
    });
