import { addNewUser, deleteUserID, getAllUsers, getUserByID, updateUserByID } from "../controllers/AppController";

const routes = (app) =>{
    app.route('/user')
       .get((req,res, next)=>{
           //Added middleware next to perform action before proceeding the  request
           //We can see this log in terminal
           console.log(`Request from ${req.originalUrl}`)
           console.log(`Request method ${req.method}`)
           next();
       },getAllUsers)

        .post(addNewUser)

        app.route('/user/:userID')
           .get(getUserByID)
           .put(updateUserByID)
           .delete(deleteUserID)
}

export default routes;