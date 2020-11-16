const express = require("express");

const apiVersion1 = require('./APIV1')

const app = express()
const port = 3000


app.use("/v1",apiVersion1)

app.listen(port,()=>{
  console.log(`listening at http://localhost${port}`)
})
