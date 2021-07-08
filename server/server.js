const pool = require('../database/PostgreSQLdb.js');
const express = require('express');
const app = express();
const PORT = 3000;
const path = require('path');
const userController = require('./controllers/userController.js');

app.use(express.json());

app.use(express.urlencoded({extended: true}))

app.use('/build', express.static(path.join(__dirname, '../build')))

// app.use('/', express.static(path.resolve(__dirname, '../index.html')));

app.use('/users', userController.getUser, (req,res) => {
  return res.status(200).json(res.locals.users)
})

app.get('/events', userController.getEvent, (req,res) => {
  return res.status(200).json(res.locals.events)
})

app.get('/reviews', userController.getReviews, (req, res)=>{
    return res.status(200).json(res.locals.reviews)
})

// app.get('/auth', userController.authenticateUser, (req, res)=> {

// }
// )
app.post('/login', userController.authenticateUser, (req,res)=> {
  return res.status(200).json(res.locals.authUser);
})
 

// app.post('/signup',userController.signup, (req,res)=> {

// })

app.use('/', (req,res) => {
  return res.status(200).sendFile(path.join(__dirname, '../index.html'))
})


// catch-all route handler for any requests to an unknown route
app.use((req, res) => res.status(404).send('This is not the page you\'re looking for...'));

//global error handler
app.use((err, req, res, next) => {
    const defaultErr = {
      log: 'Express error handler caught unknown middleware error',
      status: 500,
      message: { err: 'An error occurred' },
    };
    const errorObj = Object.assign({}, defaultErr, err);
    console.log(errorObj.log);
    return res.status(errorObj.status).json(errorObj.message);
  });

app.listen(PORT, console.log(`Server Listening on ${PORT}`));
