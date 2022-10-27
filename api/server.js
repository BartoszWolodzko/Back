const express = require('express');
const app = express();
const { Client } = require('pg');
const client = new Client({
    user: 'postgres',
    host: 'postgres',
    database: 'postgres',
    password: 'postgres',
    port: 5432,
});
client.connect();

app.listen(3000, '0.0.0.0', () => {
    console.log('Application listening at 0.0.0.0:3000');
});

app.get('/hobbies', (req, res) => {
    client.query('SELECT * FROM hobbies', (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result.rows);
    });
});
app.get('/hobbies/average', (req, res) => {
    client.query(`SELECT avg(hobby_id) as average FROM hobbies;`, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result.rows);
    });
});
app.get('/hobbies/:id', (req, res) => {
    client.query(`SELECT * FROM hobbies WHERE hobby_id = ${req.params.id}`, (err, result) => {
        if (err) {
            console.log(err);
        }
        res.send(result.rows);
    });
});



app.get('/', (req,res) => {
    res.send('Simple API');
});