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


    return next()
    
    }

    userController.deleteUser = (req, res, next)=>{
   
        

        
        }

module.exports = userController;