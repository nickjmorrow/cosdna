import { StateType } from 'typesafe-actions';
import { rootReducer } from './rootReducer';
import { TodosState } from './todos/TodosState';

export interface RootState {
    todosState: TodosState;
}
