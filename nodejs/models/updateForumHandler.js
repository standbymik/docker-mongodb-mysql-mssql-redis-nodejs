import { connection } from '../connectDB/mysql'

const updateHandler = async (req, res) => {

    const { where, title, name } = req.body
    const date = new Date()

    connection.query("SELECT title FROM forum WHERE title = ?", [where], (err, results, fields) => {
        if (err) throw err

        if (results.length == 0) return res.json({ success: false, error_message: 'not found' })

        connection.query('UPDATE forum SET ? WHERE ?', [{ name, create_time: date }, { title: where }], (err, results, fields) => {
            if (err) throw err

            res.json({ success: true })

        })
    })

}

export {
    updateHandler
}