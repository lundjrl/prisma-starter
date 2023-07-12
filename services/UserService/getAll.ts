import { Request, Response } from 'express'
import { prisma } from '../OrmService/initClient'
import { UserInfo } from '@prisma/client'
import { ApiResponse } from '~/types/ApiResponse'

export const getAll = async (req: Request, res: Response) => {
  const params = req.body?.queryParams ?? {}
  const data: UserInfo[] = await prisma.userInfo.findMany(params)

  const response_obj: ApiResponse = { status: 'success', data }
  res.send(response_obj)
}
