import { connection } from '../connectDB/mysql'

const addForumHandler = async (req, res) => {

    connection.query('SELECT * FROM forum', function (error, results, fields) {
        if (error) throw error;
        // connected!

        console.log(fields)

        return res.json(results)
    })

}

export {
    addForumHandler
}