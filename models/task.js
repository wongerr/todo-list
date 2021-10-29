const Sequelize = require("sequelize")
const url = process.env.DATABASE_URL || ("postgres://gzznihge:zlu7NCfEmC8I2QbS5ICTTSXnbe0HDAPK@fanny.db.elephantsql.com/gzznihge") //defined a url either set by my node process or the elephant sql. 
const sequelize = new Sequelize(url, {//adding an object
  dialect: 'postgres',
  ssl:true,
  protocol: 'postgres',


  dialectOptions: {
    ssl:{
      require: true,
      rejectUnauthorized: false
    }
  }
})

let Task = sequelize.define("tasks", {
  name: Sequelize.STRING,
  status: Sequelize.STRING,
  deadline: Sequelize.DATE
})

module.exports = {
  Task,
  sequelize
}