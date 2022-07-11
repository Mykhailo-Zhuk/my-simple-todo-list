import { store } from '../store/store';

export const createTodo = (text) => {
  const state = store.getState().todos;
  const newID = state.length + 1;
  return {
    type: 'ADD_TODO',
    id: newID,
    text,
    completed: false,
  };
};
export const toggleTodo = (id) => {
  return {
    type: 'TOGGLE_TODO',
    id: id,
    completed: true,
  };
};

export const deleteTodo = (id) => {
  return {
    type: 'DELETE_TODO',
    id: id,
  };
};
