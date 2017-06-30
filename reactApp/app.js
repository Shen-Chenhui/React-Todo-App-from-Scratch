import React from 'react';
import ReactDOM from 'react-dom';

var dummyData=[{ taskText: "laundry", completed: false },{ taskText: "Catch 'em all", completed: true },{ taskText: "cooking", completed: false }];

function Todo(props){
  return (
    props.completed? <li><button className="btn-danger">X</button> <strike>{props.task}</strike></li>:
    <li><button className="btn-danger">X</button> {props.task}</li>
    //don't put button outside because it is inside <ul> which looks for <li>
  )
};
function InputLine(props){
  return (
    <div>
      <input type="text" placeholder="task"/>
      <button className="btn-info">Add todo</button>
    </div>
  )
};

function TodoList(props){
  return (
    <ul>{props.todos.map(task=><Todo task={task.taskText} completed={task.completed}/>)}</ul>
  )
};

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

ReactDOM.render(<TodoApp />,
   document.getElementById('root'));
