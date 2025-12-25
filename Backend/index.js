import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './Routes/userRoutes.js';
import {connectDB} from './Config/connectDB.js'
import authRoutes from '/Routes/authRoutes.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 5000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

connectDB();

app.use('/api',userRoutes);
app.use('/auth',authRoutes);

app.get('/', (req,res) => {
    res.status(200).json({
        message: "Welcome to the homepage"
    })
})

app.listen(port, () => {
    console.log(`Server is listening on port no. : ${port}`);
})