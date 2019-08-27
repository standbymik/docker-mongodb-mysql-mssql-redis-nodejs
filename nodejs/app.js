import express from 'express'
const app = express()
import bodyParser from 'body-parser'
import cors from 'cors'
// import { connection } from './connectDB/mysql'
import { config } from './connectDB/mssql'
import forumRoute from './routes/forumRoute'
import sql from 'mssql'

app.use(cors())
app.use(bodyParser.json())
app.use(bodyParser.urlencoded({ extended: true }))

app.get('/', (req, res) => {
    res.json({ success: true })
})

app.use('/forum', forumRoute)

app.get('/mssql', async (req, res) => {

    const { username } = req.query

    let pool = await sql.connect(config)
    let result = await pool.request()
        .query(`select * from dbo."users" where username = '${username}' `)
    const data = result.recordset.length===0 ? null : result.recordset[0]

    sql.close()

    res.json({ success: true, data })
})

app.listen(3000, () => {
    console.log('Start server at port 3000.')
})