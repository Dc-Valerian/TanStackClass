import mongoose, { Schema } from "mongoose";


interface myData{
    title:string;
    desription:string;
}


interface PostData extends myData,mongoose.Document{}

const mySchema = new mongoose.Schema({
    title:{
        type:String,
    },
    description:{
        type:String,
    }
})

export default mongoose.model<PostData>("posts",mySchema)