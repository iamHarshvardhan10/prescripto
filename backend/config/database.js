import mongoose from 'mongoose';


const dbConnection = () => {
    mongoose.connect(process.env.MONGODB_URL).then(() => {
        console.log('MongoDB Connected Successfully')
    }).catch((error) => {
        console.log(error.message)
        process.exit(1);
    })
}


export default dbConnection;