import mongoose from "mongoose";
import { Schema } from "mongoose";

const studentSchema =  new Schema ({
    fName:{
        type:String,
        required: true

    },
    lName:{
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