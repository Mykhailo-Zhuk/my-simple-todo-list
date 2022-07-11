import React from 'react';
import { AiOutlineDelete, AiOutlineCheck, AiOutlineClose } from 'react-icons/ai';
import { store } from '../../store/store';
import { deleteTodo, toggleTodo } from '../../actions/actions';

const Tasks = (props) => {
  const { todos } = store.getState();
  return (
    <div>
      {todos.map((task) => {
        const toggleClass = (el) => (task.completed ? `header-${el} completed` : `header-${el}`);
        return (
          <div key={task.id} className={toggleClass('output')}>
            <p className={toggleClass('text')}>{task.text}</p>
            <div className="btns">
              <button className="btn-toggle" onClick={() => store.dispatch(toggleTodo(task.id))}>
                {task.completed ? <AiOutlineClose /> : <AiOutlineCheck />}
              </button>
              <button className="btn-delete" onClick={() => store.dispatch(deleteTodo(task.id))}>
                <AiOutlineDelete />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default Tasks;
