import 'module-alias/register'
import express, { type Request, type Response } from 'express'
import cors from 'cors'
import routers from '@/infra/routes'
import 'dotenv/config'

const port = process.env.PORT ?? 5000
const app = express()
app.use(express.json())
app.use(cors())

app.use(routers)
app.get('/', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
