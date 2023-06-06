import mongoose, { mongo } from "mongoose";


let isConnected = false; //tracks the connection

export const connectToDB = async ()=>{
    mongoose.set('strictQuery', true)

    if(isConnected){
        console.log('MongoDB is already connected')
    }else{
        try{
            mongoose.connect(process.env.MONGODB_URI, {
                dbName: 'share_prompt',
                useNewUrlParser: true,
                useUnifiedTopology: true
            })
            isConnected = true
            console.log('MongoDB is connected!')
        }catch(error){
            console.log(error)
        }
    }
}