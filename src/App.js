import React, { Component } from 'react';
import { AiOutlinePlus } from 'react-icons/ai';
import { createTodo } from './actions/actions';
import './App.css';
import Tasks from './components/tasks/tasks';
import { store } from './store/store';

class App extends Component {
  constructor() {
    super();
    this.state = {
      text: '',
    };
    store.subscribe(this.updateStore);
  }
  getTextFromInput = (e) => {
    this.setState({
      text: e.target.value,
    });
  };
  addTodo = () => {
    store.dispatch(createTodo(this.state.text));
    this.setState({ text: '' });
  };
  updateStore = () => {
    const newTodos = store.getState().todos;
    this.setState({
      newTodos,
    });
  };
  render() {
    return (
      <div className="App">
        <fieldset className="header-input">
          <legend style={{ fontSize: '40px' }}>My ToDo list</legend>
          <form className="header-form">
            <input
              type="text"
              value={this.state.text}
              placeholder="Please write some task"
              onChange={this.getTextFromInput}
            />
            <button type="button" className="add" onClick={this.addTodo}>
              <AiOutlinePlus />
            </button>
          </form>
          <Tasks />
        </fieldset>
      </div>
    );
  }
}

export default App;
