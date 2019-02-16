import React, { Component } from 'react';
import Todos from './components/Todos';

import './App.css';


class App extends Component {
  state = {
    todos: [
      {
        id:1,
        title: 'Take out the trash',
        completed: false
      },
      {
        id: 1,
        title: 'Dinner with wife',
        completed: false
      },
      {
        id: 1,
        title: 'Meeting with boss',
        completed: false
      }
    ]
  }
  render() {
    
    return (
      // JSX
      <div className="App">
        <Todos todos={this.state.todos}></Todos>
      </div>
    );
  }
}

export default App;
