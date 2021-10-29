const express = require("express")
const app = express()
//console.log(process)
const PORT = process.env.PORT || 3000 //this means we will run on whatever port they give us, if not, 3000 as background
const router = require("./routes/taskRoutes.js")
const cors = require("cors");
// boilerplate - allow us to access req.body for post and update
app.use(express.json())
app.use(cors())
// /api/tasks
app.use("/api", router)


// home page route
app.get("/", function(req, res){
  res.send("You made it!")
})

app.listen(PORT, function() {
    console.log(`Express server running on port ${PORT}`)
})

