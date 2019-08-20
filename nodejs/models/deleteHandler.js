import { connection } from '../connectDB/mysql'

const deleteHandler = (req, res) => {

    const { id } = req.query

    connection.query("SELECT id FROM forum WHERE id = ?", [id], (err, results, fields) => {
        if (err) throw err

        if (results.length == 0) return res.json({ sucess: false })

        connection.query("DELETE FROM forum WHERE id = ?", [id], (err, results, fields) => {
            if (err) throw err

            res.json({ success: true })
        })
    })

}

export {
    deleteHandler
}