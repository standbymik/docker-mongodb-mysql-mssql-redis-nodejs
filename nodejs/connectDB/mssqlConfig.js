const config = {
    user: 'root',
    password: '123456',
    server: 'mssqlDB', // You can use 'localhost\\instance' to connect to named instance
    database: 'standbymik',

    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
}

const connectDB = async () => {
    try {
        let pool = await sql.connect(config)
        let result = await pool.request()
        return result

    } catch (err) {
        return console.log(err)
    }
}

connection = connectDB()

export {
    connection
}