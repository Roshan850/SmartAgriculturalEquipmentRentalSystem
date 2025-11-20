const app=require("./app");
const dotenv=require("dotenv");
const connectDB=require("./config/database.js");

dotenv.config();

connectDB();

const PORT = process.env.PORT || 3000;


app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});


