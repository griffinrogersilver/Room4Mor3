const db = require('../../database/PostgreSQLdb.js')

const userController = {};


userController.addUser = (req, res, next)=>{
const{id} = req.query
const values = [id]


return next()
}

userController.updateUser = (req, res, next)=>{
    const{id} = req.query
    const values = [id]
   const myQuery = 'SELECT user from Users where Users = $1'

    return next()
    
}

userController.deleteUser = (req, res, next)=>{

    

    
}

userController.getUser = (req, res, next)=>{

    // const{id} = req.query
    // const values = [id]
   const myQuery = 'SELECT * from Users where userID = 1';
   db.query(myQuery) //db.query(myQuery, values)?
   .then(data => {
       res.locals.users = data.rows[0];
       return next();
   })
   .catch(error=> {
       console.log(error)
       next(err);
   })
 
}

userController.getEvent = (req, res, next)=>{

    // const{id} = req.query
    // const values = [id]
   const myQuery = 'SELECT * from Events';
   db.query(myQuery) //db.query(myQuery, values)?
   .then(data => {
       res.locals.events = data.rows;
       return next();
   })
   .catch(error=> {
       console.log(error)
       next(err);
   })
 
}



module.exports = userController;
        // CREATE TABLE Events(
        //     eventID int PRIMARY KEY,
        //     title varchar(80) NOT NULL,
        //     subtitle varchar(80) NOT NULL,
        //     type varchar(255) NOT NULL,
        //     description varchar(255) NOT NULL,
        //     address varchar(200) NOT NULL,
        //     date varchar(200) NOT NULL,
        //     hostID int,
        //     FOREIGN KEY(hostID) REFERENCES Users(userID));
            
            
        //     CREATE TABLE Reviews(
        //     reviewID int PRIMARY KEY
        //     eventID int, 
        //     userID int,
        //     description varchar(255) NOT NULL,
        //     FOREIGN KEY(eventID) REFERENCES Events(eventID),
        //     FOREIGN KEY(userID) REFERENCES Users(userID));
            
        //     CREATE TABLE UserEvent(
        //     usereventID int PRIMARY KEY,
        //     userID int,
        //     eventID int, 
        //     FOREIGN KEY(eventID) REFERENCES Events(eventID),
        //     FOREIGN KEY(userID) REFERENCES Users(userID));
            
        //       CREATE TABLE Users(
        //     userID int PRIMARY KEY,
        //     username varchar(12) NOT NULL,
        //     password varchar(255) NOT NULL,
        //     email varchar(40) NOT NULL);
            

        //education, sporting, concerts, Plays/Musicals, barbecure, potluck, neighborhood gathering,  Movies, smellyPutPut

        // postgres://uxatxjex:1WiX_YkxJGp2luvEGfSQ4CmgjKYiwDvA@kashin.db.elephantsql.com/uxatxjex
