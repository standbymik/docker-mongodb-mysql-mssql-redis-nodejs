import { connection } from '../connectDB/mysql'

const join = (req, res) => {
    const { name } = req.query

    connection.query("SELECT forum.* , member.* FROM forum JOIN member ON forum.name = member.name WHERE forum.name = ?", [name], (err, results, fields) => {
        if (err) throw err

        if (results.length == 0) return res.json({ success: false })

        res.json(results)
    })

}

export {
    join
}