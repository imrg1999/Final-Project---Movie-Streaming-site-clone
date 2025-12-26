import { ZodError } from "zod";
import userModel from "../Model/userModel.js";
import { zodSchema } from "../Utility/zodSchema.js";
import { passwordHashing } from "../Utility/passwordHashing.js";


export const showAllUsers = async(req,res) => {
    try{
    const allUsers = await userModel.find();
    if(!allUsers || allUsers.length === 0) {
    return res.status(404).json({
        success: false,
        message: "No users listed",
        users: []
        })
    }
    res.status(200).json({
        success: true,
        message: "List of movies",
        users: allUsers
        })
} catch(error){
    res.status(500).json({
        success: false,
        message: "Internal Server Error"
    })
}
}

export const addNewUser = async(req,res) => {
    try{
        const newReqFormat = await zodSchema.parseAsync(req.body);
        const safePass = await passwordHashing(newReqFormat.password);

        const alreadyExists = await userModel.findOne({email: newReqFormat.email});
        
                if(alreadyExists) {
                return res.status(409).json({
                success: false,
                message: "The User Already Exists"
            })
         }
        
        const newUser = await userModel.create({
            ...newReqFormat,
            password: safePass
        })

        res.status(201).json({
            success: true,
            message: "New user created successfully",
            user: newUser
        })

    }catch(error){
        if (error instanceof ZodError) {
         return   res.status(400).json({
        success: false,
        message: "Invalid Request"
    })
        }  else {
    return res.status(500).json({
        success: false,
        message: "Internal Server Error"
    })
}
}
}

export const deleteUser = async(req,res)=> {
    try{
        const {id} = req.params;
        const deleteOne = await userModel.findByIdAndDelete(id);
        if(!deleteOne){
          return res.status(404).json({
            success: false,
            message: "The User could not be deleted"
          })
        }
        res.status(200).json({
            success: true,
            message: "User Deleted Successfully"
        }) 
    }catch(error) {
       return res.status(500).json({
        success: false,
        message: "Internal Server Error"
       })     
        }
}

export const updateUser = async(req,res) => {
    try{
    const {id} = req.params;
    const updateInfo = await zodSchema.parseAsync(req.body);
    if(updateInfo.password) {
        updateInfo.password = await passwordHashing(updateInfo.password)
    }
    const updatedData = await userModel.findByIdAndUpdate(id, {...updateInfo},
        {new: true}
    )
    if(!updatedData) {
        return res.status(400).json({
            success: false,
            message: "Data wasn't updated"
        })
    }
    res.status(200).json({
        success: true,
        message: "Data updated successfully",
        data: updatedData
    })
} catch(error) {
     return res.status(500).json({
        success: false,
        message: "Internal Server Error"
       })
}
}