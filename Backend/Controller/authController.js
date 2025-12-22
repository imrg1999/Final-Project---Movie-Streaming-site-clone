import { ZodError } from "zod";
import userModel from "../Model/userModel.js";
import { zodSchema } from "../Utility/zodSchema.js";
import { passwordHashing } from "../Utility/passwordHashing.js";
import jwt from "jsonwebtoken";
import bcrypt from "bcryptjs";
import dotenv from 'dotenv'

dotenv.config()


export const signUpUser = async(req,res) => {
    try{
        const newReqFormat = await zodSchema.parseAsync(req.body);
        const safePass = await passwordHashing(newReqFormat.password);

         const alreadyExists = await userModel.findOne({email: newReqFormat.email});

        if(alreadyExists) {
        return res.status(401).json({
        success: false,
        message: "The User Already Exists"
    })
        }
        
        const signUp = await userModel.create({
            ...newReqFormat,
            password: safePass
        })

    

        res.status(200).json({
            success: true,
            message: "New user created successfully",
            user: signUp
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

export const loginUser = async(req,res) => {
    try{
        const loginReqFormat = await zodSchema.parseAsync(req.body);
        const registeredUser = await userModel.findOne({email: loginReqFormat.email});
        if(!registeredUser) {
            return res.status(401).json({
                success: false,
                message: "Invalid email or password"
            })
        }
        const isMatch = await bcrypt.compare(loginReqFormat.password, registeredUser.password);
        if(!isMatch) {
            return res.status(401).json({
                success: false,
                message: "Invalid credentials"
            })
        }

        const token = jwt.sign(
            {id: registeredUser._id},
            process.env.JWT_SECRET,
            {expiresIn: "1h"}
        )

        return res.status(200).json({
            success: true,
            message: "You have successfully logged in",
            token: token
        })
    }catch(error){
        if (error instanceof ZodError) {
         return   res.status(401).json({
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