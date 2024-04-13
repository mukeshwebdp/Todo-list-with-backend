const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const todoModel = require('./models/Todo')

const app = express();
app.use(cors())
app.use(express.json())

mongoose.connect('mongodb://localhost:27017/test')
.then(()=> console.log('Database connected'))
.catch((error)=> console.log('database connection Failed'))
    
app.get('/get',(req,res)=>{
    todoModel.find()
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
app.delete('/delete/:id',(req,res)=>{
    const {id} = req.params
    todoModel.findByIdAndDelete({_id: id})
    .then(result => res.json(result))
    .catch(err => res.json(err))
})
app.post('/add' , (req,res)=>{
    const task = req.body.task;
    todoModel.create({
        task: task 
    }).then(result => res.json(result))
    .catch(err => res.json(err))
})

app.listen(3001,()=>{
    console.log('server is Runnig at 3001');
})
