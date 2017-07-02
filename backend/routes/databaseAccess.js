import express from 'express';
const router = express.Router();
import Todo from '../models/TodoItem';

router.post('/add', (req, res) => {
  const newTodo = new Todo({
      task:req.body.task
  });
  newTodo.save()
    .then(response => {
      res.send(response);
    })
    .catch(error => {
      res.send(error);
    })
});

router.get('/add',(req,res)=>{
   Todo.find()
   .exec(function(err,data){
     if(err){
       res.send({failure: err})
     }
     res.send(data)
   })
});

router.post('/toggle',(req,res)=>{
  Todo.findById(req.body.id)
  .exec(function(err,todo){
    if(err){
      res.send({failure: err})
    }
    todo.completed = !todo.completed;
    todo.save();
    res.send(todo)
  })
});

router.post('/remove',(req,res)=>{
  Todo.findById(req.body.id)
  .remove()
  .exec(function(err,todo){
    if(err){
      res.send({failure: err})
    } else {
      res.send(todo)
    }
  })
})

export default router;
