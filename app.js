import express from 'express'
import morgan from 'morgan'

import postRouter from './routes/posts.js'

const app = express()
const PORT = process.env.PORT

app.use(morgan('dev'))
app.use(express.static('public'))
app.use(express.json())

app.use('/api/posts', postRouter)
// example app.use('/api/cities', router)

app.listen(PORT, function () {
  console.log(`Server is running on port ${PORT}`)
})