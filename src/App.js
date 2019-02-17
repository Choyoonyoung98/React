import React, { Component } from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import Header from './components/layout/Header';
import Todos from './components/Todos';
import AddTodo from './components/AddTodo';
import About from './components/pages/About';
// import  uuid from 'uuid';
import axios from 'axios';



import './App.css';
// import { isConstructorDeclaration } from 'typescript';


class App extends Component {
  state = {
    todos: [
      // {
      //   id: uuid.v4(),
      //   title: 'Take out the trash',
      //   completed: false
      // },
      // {
      //   id: uuid.v4(),
      //   title: 'Dinner with wife',
      //   completed: true
      // },
      // {
      //   id: uuid.v4(),
      //   title: 'Meeting with boss',
      //   completed: false
      // }
    ]
  }
  componentDidMount() {
    axios.get('https://jsonplaceholder.typicode.com/todos?limit=10')
    .then(res => this.setState({todos: res.data}))
  }

  //Toggle Complete
  markComplete = (id) => {
    console.log(id)
    
    this.setState({ todos: this.state.todos.map(todo => {
      if(todo.id === id) {
        todo.completed = !todo.completed
      }
      return todo;
    })});

  }

  //Delete Todo
  // delTodo = (id) => {
  //   // console.log(id);
  //   this.setState({ todos: [...this.state.todos.filter(todo => todo.id!== id)]})

  // }
  delTodo = (id) => {
    axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`)
    .then(res => this.setState({todos:[...this.state.todos.filter(todo => todo.id!== id)]}));
  }

  //Add Todo
  addTodo = (title) => {
    // const newTodo = {
    //   // id: uuid.v4(),
    //   id: 
    //   title,
    //   completed: false
    // }
    axios.post('https://jsonplaceholder.typicode.com/todos', {
      title,
      completed: false})
    .then(res => this.setState({todos: [...this.state.todos, res.data]}))

    // this.setState({todos: [...this.state.todos, newTodo]});
  }
  
  render() {
    return (
      <Router>
        <div className="App">
          <div className="container">
            <Header/>
            <Route exact path="/" render={props => (
              <React.Fragment>
                <AddTodo addTodo={this.addTodo}/>
                <Todos todos={this.state.todos} markComplete={this.markComplete} delTodo={this.delTodo}></Todos>
                { /* 1:todos라는 state를 todos라는 이름으로 Todos.js에 알려준다 */}
              </React.Fragment>
            )} />
            <Route path="/about" component={About}/>
            
          </div>
        </div>
      </Router>

    );
  }
}

export default App;
