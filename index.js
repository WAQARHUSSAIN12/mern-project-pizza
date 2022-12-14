import dotenv from 'dotenv';
import express from "express";
import {connectDB} from  './database/connection.js';
import pizzaRoute from "./route/pizzaRoutes.js";
import userRoute from "./route/userRoutes.js";
import orderRoute from "./route/orderRoutes.js";

//import morgan from 'morgan';

dotenv.config()
app.use("/public",express.static("public"));
//connect mongodb
connectDB();

app.use(express.urlencoded({ extended: false }));

const app = express();

// middlewares
app.use (express.json());
//app.use(morgan("dev"));
app.use('/api/pizzas' , pizzaRoute);
app.use('/api/users' , userRoute);
app.use('api/orders/' ,orderRoute);

app.get('/', (req,res)=> {
  res.send("hello");
})

const port = process.env.API_PORT || 8080

if (process.env.NODE_ENV === "production" || process.env.NODE_ENV === "staging") {
  app.use(express.static("frontend/build"));
  app.get("*", (req, res) => {
  res.sendFile(path.join(__dirname + "/frontend/build/index.html"));
  });
}

app.listen(port, function () {
  console.log(`Port is now running @ ${port}`)
});
