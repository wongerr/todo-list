const { sequelize, Task }  = require("./models/task.js")

async function connection(){
  try{
    await sequelize.authenticate()
    await sequelize.sync({force: true})

    await Task.create({name: "Mow Lawn", status: "todo", deadline: new Date("October 12, 2021")})    

     await Task.create({name: "Feed Dog", status: "in progress", deadline: new Date("October 15, 2021")}) 

      await Task.create({name: "Do Laundry", status: "todo", deadline: new Date("October 8, 2021")}) 

       await Task.create({name: "Build a Desk", status: "todo", deadline: new Date("October 10, 2021")}) 

        await Task.create({name: "Create Artifacts", status: "todo", deadline: new Date("October 24, 2021")}) 
  }
  catch(err){
    console.log(err)
  }
}

connection()