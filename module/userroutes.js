import express from "express";
import { signin, signup } from "./user.controller.js";
import {checkemail} from "../middleware/checkemail.js"
import {hashpass} from "../middleware/hashpass.js"


const userrouter = express.Router()
userrouter.post("/signup",checkemail,hashpass,signup)
userrouter.post("/signin",checkemail,signin)


const app = express();

app.get("/", (req, res) => {
    res.send("Server is working 🔥");
});


export default userrouter
