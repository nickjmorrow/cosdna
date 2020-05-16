import { TodosState } from './todos/TodosState';
import { ProductsState } from '~/products/types/ProductsState';

export interface RootState {
    todos: TodosState;
    products: ProductsState;
}
