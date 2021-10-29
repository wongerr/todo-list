const {Router} = require('express')
const router = Router()
const { getTasks, getOneTask, deleteTask, createTask, updateTask } = require("../controllers/tasks.js")

router.get("/tasks", getTasks)
router.get("/task/:id", getOneTask)
router.delete("/task/:id", deleteTask)
router.post("/tasks", createTask)
router.put("/task/:id", updateTask)

module.exports = router