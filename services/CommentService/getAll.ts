import { Request, Response } from 'express'
import { prisma } from '../OrmService/initClient'
import { Comment } from '@prisma/client'
import { ApiResponse } from '~/types/ApiResponse'

export const getAll = async (req: Request, res: Response) => {
  const params = req.body?.queryParams ?? {}
  const data: Comment[] = await prisma.comment.findMany(params)

  const response_obj: ApiResponse = { status: 'success', data }
  res.send(response_obj)
}
