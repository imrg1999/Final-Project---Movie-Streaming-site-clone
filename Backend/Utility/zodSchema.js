import {z} from 'zod';

export const zodSchema = z.object({
    name: z.string().min(1, {
        message: "Enter Valid Name"
    }),
    email: z.string().min(1,{message: "Incorrect input"}).email({message: "Enter Correct Mail ID"}),
    password: z.string().min(8, {message: "Enter a secure password"}),
    role: z.enum(["user", "admin"], {
  message: "Invalid role"})
})