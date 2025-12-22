import express from 'express';
import { addNewUser } from '../Controller/userController.js';

const route = express.Router();


route.post('/add',addNewUser)


export default route