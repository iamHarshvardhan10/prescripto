import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import dbConnection from './config/database.js';


const PORT = 3333 || process.env.PORT;

const app = express();


app.get('/', (req, res) => {
    res.json({
        message: 'Server is working good',
        user: 'Ohh! Nice one , I am also doing great'
    })
})

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    dbConnection(); //MONGODB CONNECTION FUNCTION
})