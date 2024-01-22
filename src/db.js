import mongoose from "mongoose";

export const connectDB = async()=>{
    try{
        await mongoose.connect("mongodb+srv://romeroceafelipe:djfelipe1994@clusterexamen.pqyzqaa.mongodb.net/?retryWrites=true&w=majority");
        console.log('>>> Connect mongodb')
    }catch(error){
        console.log(error)

    }
    
}

