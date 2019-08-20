import express from 'express'
const app = express()
import bodyParser from 'body-parser'
import cors from 'cors'
import { connection } from './connectDB/mysql'

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({ success: true })
})

app.get('/get_mysql', (req, res) => {

    connection.query('SELECT * FROM forum', function (error, results, fields) {
        if (error) throw error;
        // connected!

        res.json(results)
    })

    // res.json({ success: true })
})

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})