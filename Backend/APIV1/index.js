const express = require("express");
const blogRouter = require('./Routes/blogRoutes')

const api = express.Router();

api.use("/blog",blogRouter)

module.exports = api
