import React from 'react';
import ReactDOM from 'react-dom';
//import any other component file directly referenced
function Todo(props){
  return (
    props.completed? <li><button className="btn-danger">X</button> <strike>{props.task}</strike></li>:
    <li><button className="btn-danger">X</button> {props.task}</li>
    //don't put button outside because it is inside <ul> which looks for <li>
  )
};

export default Todo;
