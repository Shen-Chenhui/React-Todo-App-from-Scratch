import React from 'react';
import ReactDOM from 'react-dom';
//import any other component file directly referenced
function InputLine(props){
  return (
    <div>
      <input type="text" placeholder="task"/>
      <button className="btn-info">Add todo</button>
    </div>
  )
};

export default InputLine;
