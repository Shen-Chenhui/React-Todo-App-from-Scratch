import React from 'react';
import ReactDOM from 'react-dom';
import InputLine from './InputLine';
import TodoList from './TodoList';
import axios from 'axios';

const dbUrl = "http://localhost:3000/db";

class TodoApp extends React.Component{
  constructor(props){
    super(props);
    this.state = {
      todos: []
    };
  }
  componentDidMount(){
    var todoapp = this;
    axios.get(dbUrl+'/add')
    .then(function(response){
      todoapp.setState({todos:response.data})
    })
    .catch(function(err){
      console.log(err)
    })
  }
  addTodo(task){
    var todoapp = this;
    axios.post(dbUrl+'/add', {task:task})
    .then(function (response) {
      todoapp.setState({ todos: todoapp.state.todos.concat(response.data)});
    })
    .catch(function (error) {
      console.log("error:",error)
    });
  }
  removeTodo(id){
    var todoapp = this;
    axios.post(dbUrl+'/remove',{id:id})
    .then(function(response){
      todoapp.setState({todos:todoapp.state.todos.filter(todo=>(todo._id !== id))})
    })
    .catch(function(error){
      console.log("error:",error)
    })
  }
  toggleTodo(id){
    var todoapp = this;
    axios.post(dbUrl+'/toggle',{id: id})
    .then(function(response){
      todoapp.setState({todos:todoapp.state.todos.map(todo=>{
        if(todo._id === id){
          return response.data;
        }
        return todo;
      })})
    })
    .catch(function(err){
      console.log("error:",error)
    })
  }
  render(){
    return(
      <div>
        <InputLine submit={this.addTodo.bind(this)}/>
        {/* (task)=>this.addTodo(task) if we use this, don't forget to pass in task!!!*/}
        <TodoList todoXClick={this.removeTodo.bind(this)} todos={this.state.todos} toggle={this.toggleTodo.bind(this)}/>
      </div>
    )
  }
}

export default TodoApp;
