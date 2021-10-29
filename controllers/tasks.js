let { Task } = require("../models/task.js")

async function getTasks(req, res){
  try{
    let tasks = await Task.findAll()
    res.json(tasks)
  }catch(err){
    res.sendStatus(500)
  }
}

let getOneTask = async (req, res) => {
  try{
    console.log(req)
    let id = Number(req.params.id)
    let task = await Task.findByPk(id)
    res.json(task)
  }catch(err){
    res.sendStatus(404)
  }
}


async function deleteTask(req, res){
  try{
    // find the item we want to delete
    let id = Number(req.params.id)
    let task = await Task.findByPk(id)
    // delete the item
    let deleted = await task.destroy()

      if(deleted){
        res.sendStatus(200).json({message: "Item deleted successfully"})
      }
      res.sendStatus(404).json({message: "Task not found"})
    

  }
  catch(err){
    res.sendStatus(500)
  }
}

async function createTask(req, res){
  try{
    console.log(req.body)
    let data = req.body
    data.deadline = new Date(data.deadline)

    let newTask = await Task.create(data)
    res.status(201).json(newTask)
    
  }
  catch(err){
    res.json({message: error})
  }
}

let updateTask = async (req, res) => {
  try{
    console.log(req.body)
    let data = req.body
    data.deadline = new Date(data.deadline)
    let id = Number(req.params.id)
    let task = await Task.findByPk(id)
    let updatedTask = await task.update(data)

    res.json(updatedTask)

  }
  catch(err){
    res.json({message: err})
  }
}


module.exports = {
  getTasks,
  getOneTask,
  deleteTask, 
  createTask,
  updateTask
}


// Create function in controllers
// export from controller
// import into routes
// set up route with endpoint