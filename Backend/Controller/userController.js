import { ZodError } from "zod";
import userModel from "../Model/userModel.js";
import { zodSchema } from "../Utility/zodSchema.js";


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