import React from 'react';
import ReactDOM from 'react-dom';

var dummyData=["laundry","clean the floor","cooking"];

function Todo(props){
  return (
    <li><button>X</button> {props.task}</li>
  )
};
// class Todo extends React.Component{
//   render(){
//     return (
//         <li>{this.props.task}<button>X</button></li>
//     )
//   }
// }
class TodoList extends React.Component {
  constructor(props){
    super(props)
  }
  render(){
    return (
      <ul>{dummyData.map(task=><Todo task={task}/>)}</ul>
    )
  }
}

ReactDOM.render(<TodoList />,
   document.getElementById('root'));
