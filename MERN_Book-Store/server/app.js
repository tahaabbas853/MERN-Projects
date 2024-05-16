import express from "express";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cors from "cors";
import route from "./routes/bookRoute.js";
// import dotenv from "dotenv";

const app = express();
app.use(bodyParser.json());
app.use(cors());
// dotenv.config();


const PORT = process.env.PORT || 7000;
//const URL = process.env.MONGOURL;

// Routes
// app.get('/', (req, res) => {
//     res.send("First page of the app");
// });
app.use("/books", route); //localhost:7000/books


// MongoDB Connection
const connectToMongoDB = async () => {
    try {
        await mongoose.connect('mongodb://localhost:27017/Book_store');
        console.log("Connection with MongoDB successful.");
    } catch (error) {
        console.log("DB connection Error:", error.message);
    }
};


app.listen(PORT, ()=>{
    connectToMongoDB();
    console.log(`Server is listening on Port ${PORT}`);
});
