import mongoose, {Schema} from "mongoose";
const userSchema=new Schema({
    username:{
        type:String,
        required:true,
        unique:true,
        trim :true,
        index:true
    },
    email:{
        type:String,
        required:true,
        unique:true,
        trim :true,
    },
    fullname:{
        type:String,
        required:true
    },
    avatar:{
        type:String,  //cloudinary url
        required: true,
    },
    coverimage:{
        type: String,

    },
    watchhistory:[
        {
            type:Schema.Types.ObjectId,
            ref:"Video"
        }
    ],
    password:{
        type:String,
        required:[true, "Password is required"],
    },
    refreshtoken:{
        type:String
    }
});


export const User=mongoose.model("User", userSchema);
