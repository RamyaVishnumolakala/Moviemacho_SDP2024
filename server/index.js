import express from "express";
import cookieParser from "cookie-parser";
import cors from "cors";
import http from "http";
import mongoose from "mongoose";
import "dotenv/config";
import routes from "./src/routes/index.js";

const app = express();
mongoose.set('strictQuery', true);
app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());

app.use("/api/v1", routes);

const port = process.env.PORT || 5002;

const server = http.createServer(app);

const MONGO_URI='mongodb+srv://geetha1234:kFmWNJ8G5a4RQAL7@cluster0.2poltqm.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0'
mongoose.connect(MONGO_URI,{
    useNewUrlParser:true,
    useUnifiedTopology:true
},
() => {
  console.log("MONGODB CONNECTED");
});

const db = mongoose.connection;
db.on('error', console.error.bind(console, 'MongoDB connection error:'));


app.listen(5002, () =>{
  console.log("Server is running on port 5000");
})
//test