import   usermodel  from "./database/usermodel.js"
import userroutes from "./module/userroutes.js" 
import express from "express"
import userrouter from "./module/userroutes.js"

const app = express();
app.use(express.json());
app.use(userrouter);
// dbconnections

import userRoutes from "./module/userroutes.js";
import noteRoutes from "./module/note.routes.js";

app.use("/module", noteRoutes); 

app.use("/module", userRoutes);
app.get("/", (req, res) => {
    res.send("Server is working 🔥");
});

export default app