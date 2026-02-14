import  usermodel  from "../database/usermodel.js";

export const checkemail = async (req, res, next) => {
    let founduser = await usermodel.findOne((email.req.body.email))
    if (req.url == "/signup") {
        if (founduser) {
            return res.status(409).json({ Message: "email already exist" })
        }
        else {
            next();
        }

    }
    else {
        if (founduser) {
            next()
        }
        else{
            return res.status(422).json({Message: "email not found please signup first"})
        }
    }
}
