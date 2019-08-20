import mysql from 'mysql'
const connection = mysql.createConnection({
    host: 'mariaDB',
    port: '3306',
    database: 'standbymik',
    user: 'root',
    password: '123456'
});

export {
    connection
}