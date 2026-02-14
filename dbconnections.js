
//set node="C:\Program Files\nodejs\node.exe"
// set npm="C:\Program Files\nodejs\npm.cmd"
// set nodemon="C:\Users\Zero\AppData\Roaming\npm\nodemon.cmd"
import mongoose from 'mongoose';

const dbconnections = mongoose.connect("mongodb://localhost:27017/testdb");

dbconnections
.then(() => {
    console.log("DB connected successfully");
})
.catch((error) => {
    console.log("DB connection failed");
    console.log(error);
});

export default dbconnections;
