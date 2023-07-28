import mongoose from "mongoose";
import { Schema } from "mongoose";

const collegeSchema = new Schema({
    name:{
        type: String,
        required: true
    },
    campus:{
        type:String,
        required:true,

    },
    principal:{
        type:String,
        required: true
    }
})

const College = mongoose.model("college", collegeSchema)
export default College