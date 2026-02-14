import  usermodel  from "../database/usermodel.js";
import bcrypt from "bcryptjs";
export const signup = async (req,res)=>
{
    try{
        const adduser = await usermodel.insertMany(req.body)
        adduser[0].password=undefined
        res.status(201).json({message:"user created",   data:adduser}
         
        )
    }
    catch(error){
        res.status(500).json({message:"error"})
    }

}
export const signin=async(req,res)=>
{
    try{
        const founduser=await usermodel.findOne({email:req})
        if(!founduser)
        {
            return res.status(404).json({message:"sign up first"})
        }
        const matchpass= await bcrypt.compare(
            req.body.password,founduser.password
        )
        if(!matchpass)
        {
            return res.status(422).json({message:"invalid creadenion"})
            
        }
        founduser.password=undefined
        res.status(200).json({message:"logged in succesfully",data:founduser})
        
    }
    catch(error)
    {
        res.status(500).json({message:"error"})
    }
}
