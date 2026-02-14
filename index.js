import app from "./app.js"
import dbconnection from "./database/dbconnections.js"
const db = dbconnection;
const port =4000
app.listen(port,()=>
{
    console.log("server running on port 4000")
})