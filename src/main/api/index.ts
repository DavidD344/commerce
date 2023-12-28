import 'module-alias/register'
import { teste } from '@/domain'
import express, { type Request, type Response } from 'express'
import cors from 'cors'

console.log('rodei suaves')
console.log(teste)
const app = express()
app.use(cors())
const port = 5000

app.get('/auth', (req: Request, res: Response) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})
