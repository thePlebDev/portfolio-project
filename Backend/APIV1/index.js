const express = require("express");
const blogRouter = require('./Routes/blogRoutes')
const userRouter = require('./Routes/userRoutes')
const cryptoRouter = require('./Routes/cryptoRoutes')

const api = express.Router();

api.use("/blog",blogRouter)
api.use('/user',userRouter)
api.use('/crypto',cryptoRouter)


module.exports = api
