const express = require("express");
const blogRouter = require('./Routes/blogRoutes')
const userRouter = require('./Routes/userRoutes')

const api = express.Router();

api.use("/blog",blogRouter)
api.use('/user',userRouter)

module.exports = api
