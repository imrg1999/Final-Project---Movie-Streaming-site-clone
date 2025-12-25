import express from 'express';
import { signUpUser } from '../Controller/authController.js';
import { loginUser } from '../Controller/authController.js';


const route = express.Router();


route.post('/signup',signUpUser);
route.post('/login',loginUser);


export default route