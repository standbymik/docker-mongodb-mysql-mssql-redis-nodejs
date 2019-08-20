import mysql from 'mysql'
const connection = mysql.createConnection({
    host: 'mariaDB',
    port: '3306',
    database: 'standbymik',
    user: 'root',
    password: '123456'
})

connection.connect((err) => {
    if (err) {
        console.error('error connecting: ' + err.stack);
        return false;
    }

})

export {
    connection
}