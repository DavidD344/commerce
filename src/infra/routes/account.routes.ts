import { Router } from 'express'

const accountRoutes = Router()

accountRoutes.get('/create', ({ res }) => { res?.send('create') })
accountRoutes.get('/delete', ({ res }) => { res?.send('delete') })

export default accountRoutes
