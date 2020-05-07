import { Todo } from './types/Todo';

export const getOddTodos = (todos: Todo[]) => {
    return todos.filter(t => t.todoId % 2 == 1);
};
