const mongoose = require("mongoose");

<<<<<<< HEAD
const DB_URL=process.env.CONNECTION_STRING;
mongooes.connect("mongodb://127.0.0.1:27017/SARS",{
    useNewUrlParser:true,
    useUnifiedTopology:true,
    }).tehn(()=>{
        console.log("Database connected Sucessfully");
=======
const connectDB = () => {
    return mongoose
        .connect("mongodb://127.0.0.1:27017/SARS", {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        })
        .then(() => {
            console.log("Database connected Successfully");
        })
        .catch((error) => {
            console.log("Database connection failed", error);
        });
};
>>>>>>> 1919bac9c0db0986a00b168dd062a4b85e5b5ffd

module.exports = connectDB;
