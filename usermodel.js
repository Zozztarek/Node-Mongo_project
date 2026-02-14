import mongoose from "mongoose";
const userschema = new mongoose.Schema(
    {
        name:{
            type:String,
            required:true,
            minlingth:10,
            maxlingth:30
        },
        email:{
            type:String,
            required:true,
            uniqe:true,
            minlingth:10,
            maxlength:30,
            password:{
                type: String,
                reqired:true,
                minlingth:8,
                maxlength:15
            }
        },
        age:{
            type:Number,
            min:12,
            max:80
        }
    }
)
 const usermodel=mongoose.model('user',userschema)
 export default usermodel