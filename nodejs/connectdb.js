import mongoose from 'mongoose'

export default function connectDB()
{
    mongoose.set('strictQuery', false)
    mongoose.connect('mongodb://0.0.0.0:27017/IPTP11-2',{})
    console.log("Connected to mongoose")
}