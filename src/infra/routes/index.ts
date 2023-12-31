import { Router } from 'express'
import accountRoutes from './account.routes'

const routers = Router()

routers.use('/account', accountRoutes)
export default routers
