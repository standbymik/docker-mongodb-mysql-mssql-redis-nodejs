import { connection } from '../connectDB/mysql'
import { validatorResult, errorFormat } from '../middlewares/validatorResult'

const join = (req, res) => {

    const errors = validatorResult(req)
    if (!errors.isEmpty()) {
        return errorFormat(errors, res)
    }

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