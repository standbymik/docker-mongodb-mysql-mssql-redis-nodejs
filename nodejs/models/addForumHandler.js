import { connection } from '../connectDB/mysql'

const addForumHandler = async (req, res) => {

    await connection.connect((err) => {
        if (err) {
            console.error('error connecting: ' + err.stack);
            return false;
        }

        connection.query('SELECT * FROM forum', function (error, results, fields) {
            if (error) throw error;
            // connected!

            console.log(fields)

            res.json(results)
        })


    })

}

export {
    addForumHandler
}