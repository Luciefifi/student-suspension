import mongoose,{ Schema } from "mongoose";

const campusSchema = new Schema({
    name:{
        type: String,
        required: true,
        unique: false

    },
    province :{
        type: String,
        required: true
    },
     district :{
        type: String,
        required: true
    },
     sector :{
        type: String,
        required: true
    }, 
    cell :{
        type: String,
        required: true
    },
     village :{
        type: String,
        required: true
    },
     street: {
    type: String,
    required: true,
  },
  zipCode: {
    type: String,
    required: true,
  },
})

const Campus = mongoose.model("Campus", campusSchema);
export default Campus;