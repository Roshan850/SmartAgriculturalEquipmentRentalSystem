const mongoose = require("mongoose");

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

module.exports = connectDB;
