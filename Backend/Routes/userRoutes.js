import express from 'express';
import { addNewUser, showAllUsers, deleteUser } from '../Controller/userController.js';

const route = express.Router();


route.post('/add',addNewUser);
route.get('/users',showAllUsers);
route.delete('/delete/:id',deleteUser);


export default route