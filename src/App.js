import React, { Component } from 'react';
import './App.css';
import ToDo from './components/ToDo';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos:[],
      newTodoDescription:''
    };
  }

  handleChange(e){
    this.setState({ newTodoDescription: e.target.value })
  }

  handleSumbit(e) {
    e.preventDefault();
    if (!this.state.newTodoDescription) {return}
    const newTodo = { description: this.state.newTodoDescription, isCompleted: false};
    this.setState({ todos: [...this.state.todos, newTodo], newTodoDescription: '' });
  }

  toggleComplete(index){
    const todos = this.state.todos.slice();
    const todo = todos[index];
    todo.isCompleted = todo.isCompleted ? false : true;
    this.setState({ todos: todos});
  }

  deleteTodo(index) {
    const todos = this.state.todos.filter((todo, todoindex) => {
      return todoindex !== index
    });
    this.setState({todos})
  }

  render() {
    return (
      <div className="App">
        <ul>
          { this.state.todos.map( (todo, index) =>
            <ToDo key={ index } description={ todo.description } isCompleted={ todo.isCompleted } toggleComplete={ () => this.toggleComplete(index) } deleteTodo={ () => this.deleteTodo(index) } />
          )}
          </ul>
          <form onSubmit={ (e) => this.handleSumbit(e) }>
            <input type="text" value={ this.state.newTodoDescription } onChange={ (e) => this.handleChange(e) }/>
            <input type="submit" />
          </form>

      </div>
    );
  }
}

export default App;
