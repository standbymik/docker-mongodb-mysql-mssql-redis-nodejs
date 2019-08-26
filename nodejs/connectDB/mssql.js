import sql from 'mssql'

const config = {
    user: 'sa',
    password: 'Mik123456;',
    server: 'mssqlDB', // You can use 'localhost\\instance' to connect to named instance
    database: 'standbymik',

    options: {
        encrypt: true // Use this if you're on Windows Azure
    }
}

export {
    config
}