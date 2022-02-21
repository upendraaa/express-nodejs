import mongoose from "mongoose";
import { UserSchema } from "../models/AppModel";

const User = mongoose.model('User',UserSchema);

export const addNewUser = (req,res) =>{
let newUser = new User(req.body);
newUser.save((err, user)=>{
    if(err){
        res.send(err);
    }else{
        res.json(user)
    }
})
}

/**
 * 
 * @param {*} req 
 * @param {*} res 
 */

export const getAllUsers = (req,res) =>{
    User.find({},(err, users)=>{
        if(err){
            res.send(err);
        }else{
            res.json(users)
        }
    })
    }

    /**
     * Getting user by the  ID, 'userID' this name should be same like in Approutes get
     * @param {*} req 
     * @param {*} res 
     */
export const getUserByID = (req, res)=>{
    User.findById(req.params.userID,(err,user)=>{
        if(err){
          res.send(err);
        }else{
           res.json(user)
        }
    })
}

/**
 * Update the user
 * _id is same as available in database
 */
 export const updateUserByID = (req, res)=>{
    User.findOneAndUpdate({_id: req.params.userID},req.body,{ new: true , useFindAndModify: false},(err,user)=>{
        if(err){
          res.send(err);
        }else{
           res.json(user)
        }
    })
}

export const deleteUserID = (req, res)=>{
    User.remove({_id: req.params.userID},(err,user)=>{
        if(err){
          res.send(err);
        }else{
           res.json({message: "User data deleted successfully!"})
        }
    })
}