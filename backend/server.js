import express from 'express'
import 'dotenv/config'
import cors from 'cors'
import cookieParser from 'cookie-parser'
import dbConnection from './config/database.js';
// import smsSender from './utils/smsSender.js';
// import mailSender from './utils/mailSender.js';
import authRoutes from './routes/auth.router.js'
import profileRoutes from './routes/profile.router.js'


const PORT = process.env.PORT;

const app = express();
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cookieParser())

app.get('/', (req, res) => {
    res.json({
        message: 'Server is working good',
        user: 'Ohh! Nice one , I am also doing great'
    })
})


app.use('/api/v1/auth', authRoutes)
app.use('/api/v1/profile', profileRoutes)

// mailSender('shreeharshpb11@gmail.com', 'Testing email', '<h1>Test Email </h1>')
// smsSender('Coderoom Say Hello to you' , '+918108424468')

app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`)
    dbConnection(); //MONGODB CONNECTION FUNCTION
})
