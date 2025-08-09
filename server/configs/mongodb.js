import mongoose from 'mongoose'

const connectDB = async() => {
    mongoose.connection.on('connected', () => console.log("Data-Base Connected" ))

    await mongoose.connect(`${process.env.MONGODB_URI}/learnio`)
}

export default connectDB;