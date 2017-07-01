import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo'
//import any other component file directly referenced

function TodoList(props){
  return (
    <ul>{props.todos.map(task=><Todo toggle={()=>props.toggle(props.todos.indexOf(task))} xClick={() => props.todoXClick(props.todos.indexOf(task))} task={task.taskText} completed={task.completed}/>)}</ul>
  )
};

export default TodoList;
