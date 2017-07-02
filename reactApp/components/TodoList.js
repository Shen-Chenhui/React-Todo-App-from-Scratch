import React from 'react';
import ReactDOM from 'react-dom';
import Todo from './Todo'
//import any other component file directly referenced

function TodoList(props){
  return (
    <ul>{props.todos.map(task=><Todo key={task._id} toggle={()=>props.toggle(task._id)} xClick={() => props.todoXClick(task._id)} task={task.task} completed={task.completed}/>)}</ul>
  )
};

export default TodoList;
