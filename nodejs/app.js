import express from 'express'
const app = express()
import bodyParser from 'body-parser'
import cors from 'cors'
import { connection } from './connectDB/mysql'
import forumRoute from './routes/forumRoute'

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({ success: true })
})

app.use('/forum', forumRoute)

app.get('/get_mysql', (req, res) => {

    res.json({ success: true })
})

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})