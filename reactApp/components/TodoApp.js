import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine';
import TodoList from './TodoList';
//import any other component file directly referenced
var dummyData=[{ taskText: "laundry", completed: false },{ taskText: "Catch 'em all", completed: true },{ taskText: "cooking", completed: false }];

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: []
    };
  }
  componentDidMount(){
    this.setState({todos: dummyData})
  }
  render(){
    return(
      <div>
        <InputLine />
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default TodoApp;
