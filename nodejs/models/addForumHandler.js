import { connection } from '../connectDB/mysql'

const addForumHandler = async (req, res) => {

    const date = new Date()

    connection.query('INSERT INTO forum SET ?', [{ title: 'title2', name: 'name2', create_time: date }], (err, results, fields) => {
        if (err) throw err

        console.log(results.insertId)
    })
}

export {
    addForumHandler
}