if (process.env.USER) require("dotenv").config();
const express = require("express");
const app = express();
const cors = require("cors")

const notFoundHandler = require("./errors/notFoundHandler")
const errorHandler = require("./errors/errorHandler")

const moviesRouter = require("./movies/movies.router")
const reviewsRouter = require("./reviews/reviews.router")
const theatersRouter = require("./theaters/theaters.router")

app.use(cors())
app.use(express.json())

app.use("/movies", moviesRouter);

app.use("/reviews", reviewsRouter)

app.use("/theaters", theatersRouter)

app.use(notFoundHandler)
app.use(errorHandler)

module.exports = app;
