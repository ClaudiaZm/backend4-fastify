
import mongoose from "mongoose";

const {Schema,model} = mongoose;

const userSchema = new Schema({

    name :{
        type:String,
        require:[true,"El campo nombre es obligatorio "]
    },
    email :{
        type:String,
        require:[true,"El campo email es obligatorio "],
        unique:true

    },
    password :{
        type: String,
        require:[true,"El campo password es obligatorio "]
    },
},{ timestamps:true})

export const userModel = model("user",userSchema)


