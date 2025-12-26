import express from 'express';
import { addNewUser, showAllUsers, deleteUser, updateUser } from '../Controller/userController.js';

const route = express.Router();


route.post('/add',addNewUser);
route.get('/users',showAllUsers);
route.delete('/delete/:id',deleteUser);
route.put('update/:id',updateUser);


export default route