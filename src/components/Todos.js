import React, { Component } from 'react';
import TodoItem from './TodoItem';
import PropTypes from 'prop-types';



class Todos extends Component {
  render() {
    return this.props.todos.map((todo) => (
      // 2:todos로 state를 담은 것을 todo라는 변수에다가 매핑해준다
      // 이제부터 아래의 컴포넌트들은 todos라는 state에 대해서 todo로 부르고 사용 가능한 것
        <TodoItem key={todo.id} todo={todo} delTodo={this.props.delTodo} markComplete={this.props.markComplete}></TodoItem>
        //여기서 key와 todo와 markComplete는 props이다.
        //그런데 다시 markCompete라는 props에 또 상위의 props결과를 담았으므로 App.js로 이동해서 확인.

        
    ));
  }
}


// PropTypes
Todos.propTypes = {
  todos: PropTypes.array.isRequired,
  markComplete: PropTypes.func.isRequired
}

export default Todos
