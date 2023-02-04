const mongoose = require('mongoose');
const user = 'api_data';
const password = 'H8lAyvPCKq4PVJTA';
const dbname = 'api_data';
const DB_URI = `mongodb+srv://${user}:${password}@cluster0.u6bcqbo.mongodb.net/${dbname}?retryWrites=true&w=majority`;
mongoose.set('strictQuery', false);
module.exports = () => mongoose.connect(DB_URI, {  useNewUrlParser: true, useUnifiedTopology: true },)

//const DB_URI = `mongodb://localhost:27017/my_app_node`

         .then (db => console.log ('BASE DE DATOS CONECTADA'))
         .catch(err => console.log(err))
    

