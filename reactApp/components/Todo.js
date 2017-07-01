import React from 'react';
import ReactDOM from 'react-dom';
//import any other component file directly referenced
function Todo(props){
  return (
    props.completed? <li><button onClick={()=>props.xClick()} className="btn-danger">X</button> <strike><span onClick={()=>props.toggle()}>{props.task}</span></strike></li>:
    <li><button onClick={()=>props.xClick()} className="btn-danger">X</button><span onClick={()=>props.toggle()}> {props.task}</span></li>
    //don't put button outside because it is inside <ul> which looks for <li>
  )
};

export default Todo;
