import mongoose from "mongoose";
import { Schema } from "mongoose";

const studentSchema =  new Schema ({
    name:{
        type:String,
        required: true

    },
    age:{
        type: Number,
        required: true,
    },
    sex:{
        type:String,
        required: true
    },
    regNumber:{
        type:Number,
        required:true
    }
})

const Student =  mongoose.model("students", studentSchema);
export default Student