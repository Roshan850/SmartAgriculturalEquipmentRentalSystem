const express =require("express");
const dotenv =require("dotenv");
const cors =require("cors");
const apiLimiter=require("./middlewares/rateLimitMiddleware.js");
const logger=require("./middlewares/loggingMiddleware.js");
const notFound=require("./middlewares/notFoundMiddleware.js");
const errorHandler=require("./middlewares/errorMiddleware.js");
const userRoutes=require("./routes/userRoutes.js");


dotenv.config();

const app = express();
app.use(express.json());
app.use(cors());

app.use(logger);
app.use("/api", apiLimiter);
app.use("/api/users", userRoutes);


app.get("/", (req, res) => {
  res.send("API is running...");
})
app.use(notFound);

app.use(errorHandler);

module.exports=app;
