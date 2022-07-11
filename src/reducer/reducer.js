const initialState = {
  todos: [],
};
export const reducer = (state = initialState, action) => {
  switch (action.type) {
    case 'ADD_TODO': {
      let todo = state.todos.find((el) => el.id === action.id);
      console.log('Case 1');
      if (todo || action.text === '') {
        return { ...state };
      } else {
        const addTask = state.todos.concat([
          { id: action.id, text: action.text, completed: action.completed },
        ]);
        return { todos: addTask };
      }
    }
    case 'TOGGLE_TODO': {
      let todo = state.todos.find((task) => task.id === action.id);
      if (todo) {
        todo.completed = !todo.completed;
        return { ...state, todo };
      }
      console.log('Case 2');
      return { ...state };
    }
    case 'DELETE_TODO': {
      const filterTasks = state.todos.filter((el) => el.id !== action.id);
      return { todos: filterTasks };
    }

    default:
      return state;
  }
};
