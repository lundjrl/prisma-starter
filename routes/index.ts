import express from 'express'
import { healthEndpoint } from '~/services/health'
import { getAll as getAllAccounts } from '~/services/AccountService/getAll'
import { getAll as getAllComments } from '~/services/CommentService/getAll'
import { getAll as getAllUsers } from '~/services/UserService/getAll'

const Router = express.Router()

// Health endpoints
Router.get('/', healthEndpoint)
Router.get('/health', healthEndpoint)

// Endpoints for accounts
Router.get('/account/getAll', getAllAccounts)

// Endpoints for comments
Router.get('/comment/getAll', getAllComments)

// Endpoints for users
Router.get('/user/getAll', getAllUsers)

export default Router
