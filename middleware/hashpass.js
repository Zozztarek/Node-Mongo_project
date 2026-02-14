import bcrypt from 'bcryptjs'
export const hashpass= (req,res,next)=>
{
    req.body.password=bcrypt.hash(req.body.password,8)
    next()
}
