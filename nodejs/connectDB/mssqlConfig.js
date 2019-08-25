import sql from 'mssql'

const config = {
    user: 'root',
    password: '123456',
    server: 'mssqlDB', // You can use 'localhost\\instance' to connect to named instance
    database: 'tempdb',

    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
}

const connectDB = async () => {
    let pool = await sql.connect(config)
    let request = await pool.request()
    return request
}

const connection = connectDB()

export {
    connection
}