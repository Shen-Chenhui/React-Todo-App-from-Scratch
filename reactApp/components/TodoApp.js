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
  addTodo(task){
    dummyData.push({
      taskText: task,
      completed: false
    })
    this.setState({todos:dummyData})
  }
  componentDidMount(){
    this.setState({todos: dummyData})
  }
  render(){
    return(
      <div>
        <InputLine submit={this.addTodo.bind(this)}/>
        {/* (task)=>this.addTodo(task) if we use this, don't forget to pass in task!!!*/}
        <TodoList todos={this.state.todos} />
      </div>
    )
  }
}

export default TodoApp;
