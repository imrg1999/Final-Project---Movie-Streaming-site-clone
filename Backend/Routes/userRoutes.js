import express from 'express';
import { addNewUser } from '../Controller/userController';

const route = express.Router();


route.post('/add',addNewUser)


export default route