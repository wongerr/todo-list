const Sequelize = require("sequelize")
const sequelize = new Sequelize("postgres://gzznihge:zlu7NCfEmC8I2QbS5ICTTSXnbe0HDAPK@fanny.db.elephantsql.com/gzznihge")

let Task = sequelize.define("tasks", {
  name: Sequelize.STRING,
  status: Sequelize.STRING,
  deadline: Sequelize.DATE
})

module.exports = {
  Task,
  sequelize
}