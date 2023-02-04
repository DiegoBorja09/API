const express = require('express');
const initDB = require('./config/db');
const bodyParser = require('body-parser');
const cors = require("cors");

const port = 3000  
const app = express()

app.use(cors({
  origin:["http://localhost:4200"],
}))

const  userRouters = require('./app/routes/user')
//const  itemsRouters = require('./app/routes/items')
//xxxxxxxxxxxxxxxx
app.use(
  bodyParser.json({
    limit: '20mb'
  })
)
//xxxxxxxxxxxxx
app.use(
  bodyParser.urlencoded({
    limit: '20mb',
    extended: true
  })
)
app.use(userRouters)
//app.use(itemsRouters)

app.listen(port, () => {
    console.log('la aplicacion esta en linea');
})

initDB();

