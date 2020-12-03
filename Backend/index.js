const express = require("express");
const setUpPassport = require("./setuppassport");
const cors = require('cors')
const setupLoader = require('./Loaders/setupLoader')
const mongoLoader = require('./Loaders/mongoLoader')
const apiVersion1 = require('./APIV1')

require('dotenv').config(); // gives me access to variable set in the .env file via 'process.env.VARIABLE_NAME'


const app = express()
app.use(cors({credentials: true,origin: 'http://localhost:3001'}))

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

const port = 3000
app.listen(port,()=>{
  console.log(`listening at http://localhost${port}`)
})
