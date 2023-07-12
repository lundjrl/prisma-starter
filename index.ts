import type { ErrorRequestHandler, Express } from 'express'
import express from 'express'
import dotenv from 'dotenv'
import cors from 'cors'
import createError from 'http-errors'

import Router from './routes'
import { ApiResponse } from './types/ApiResponse'

// Init env variables.
dotenv.config()

const app: Express = express()

const port = process.env.PORT

const errorHandler: ErrorRequestHandler = (err, req, res, next) => {
  const response_obj: ApiResponse = {
    status: 'error',
    message: err.message,
  }

  // render the error page
  res.send(response_obj)
}

// Initialize express json and cors.
app.use(express.json())
app.use(express.urlencoded({ extended: false }))
app.use(cors())

// Create our api routes.
app.use('/', Router)

// Catch 404s and forward to error handler.
app.use((_, res, next) => {
  next(createError(404))
})

app.use(errorHandler)

app.listen(port, () => {})
