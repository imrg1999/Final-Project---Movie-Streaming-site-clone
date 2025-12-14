import { success, ZodError } from "zod";
import userModel from "../Model/userModel.js";
import { zodSchema } from "../Utility/zodSchema.js";
import { passwordHashing } from "../Utility/passwordHashing.js";


export const showAllUsers = async(req,res) => {
    try{
    const allUsers = await userModel.find();
    if(!allUsers || allUsers.length === 0) {
    return res.status(404).json({
        success: false,
        message: "No movies listed",
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