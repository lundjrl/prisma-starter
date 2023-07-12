import { Request, Response } from 'express'
import type { ApiResponse } from '~/types/ApiResponse'

export const healthEndpoint = async (_: Request, res: Response) => {
  const response_obj: ApiResponse = {
    status: 'success',
    data: null,
  }

  res.send(response_obj)
}
