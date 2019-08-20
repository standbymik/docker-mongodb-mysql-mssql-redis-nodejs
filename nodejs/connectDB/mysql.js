import mysql from 'mysql'
const connection = mysql.createConnection({
    host: 'mariaDB',
    port: '3306',
    database: 'standbymik',
    user: 'root',
    password: '123456'
});

connection.connect(function (err) {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return
    }

    console.log('connected as id ' + connection.threadId);
})

export {
    connection
}