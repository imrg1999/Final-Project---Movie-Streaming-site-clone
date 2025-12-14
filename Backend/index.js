import express from 'express';
import dotenv from 'dotenv';
import userRoutes from './Routes/userRoutes.js'

dotenv.config();

const app = express();
const port = process.env.PORT || 3000;

app.use(express.urlencoded({extended: true}));
app.use(express.json());

app.use('/api',userRoutes);

app.get('/', (req,res) => {
    res.status(200).json({
        message: "Welcome to the homepage"
    })
})

app.listen(port, () => {
    console.log(`Server is listening on port no. : ${port}`);
})