const express = require("express");
const setUpPassport = require("./setuppassport");
const cors = require('cors')
const setupLoader = require('./Loaders/setupLoader')
const mongoLoader = require('./Loaders/mongoLoader')
const apiVersion1 = require('./APIV1')

require('dotenv').config(); // gives me access to variable set in the .env file via 'process.env.VARIABLE_NAME'


const app = express()
app.use(cors({credentials: true,origin: 'http://localhost:3000'}))

app.use(function(req, res, next) {
  res.header('Access-Control-Allow-Origin', '*');
  res.header('Access-Control-Allow-Headers', 'Origin, X-Requested-With, Content-Type, Accept');
  next();
});

//LOADERS
setUpPassport()
setupLoader.setup(app)
mongoLoader.setup(app)

//CALL TO THE VERSIONED API
app.use("/v1",apiVersion1)


//This is global error handling
app.use((error,req,res,next)=>{
  return res.status(500).json({error:error.toString()});
})

module.exports = app
