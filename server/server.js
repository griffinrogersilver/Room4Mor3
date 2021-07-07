const pool = require('../database/PostgreSQLdb.js');
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');

app.use(express.json());

app.use(express.urlencoded({extended: true}))

// app.use('/', express.static(path.resolve(__dirname, '../index.html')));

app.use('/', (req,res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'))
})

app.get('/users', (req, res)=>{
req.query = {id}
res = [id]
res.status(200).json()
})

app.listen(PORT, console.log(`Server Listening on ${PORT}`));
