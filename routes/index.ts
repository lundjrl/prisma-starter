import express from 'express'
import { ApiResponse } from '~/types/ApiResponse'

const Router = express.Router()

Router.get('/', (_, res) => {
  const response_obj: ApiResponse = {
    status: 'success',
    data: null,
  }

  res.send(response_obj)
})

export default Router
