const express = require("express")
const app = express()
const PORT = 3000
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

