import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import {userRouter} from './routes/users.js';
import { recipeRouter } from "./routes/recipes.js";

const app = express();

app.use(express.json());
app.use(cors());

app.use("/auth", userRouter);
app.use("/recipes", recipeRouter);


const connect = mongoose.connect(
        "mongodb+srv://admin:admin8390@recipe.lmagwiq.mongodb.net/recipes",
        {
            useNewUrlParser: true,
            useUnifiedTopology: true,
        }
    );

if(connect) {
    console.log("DB connection successfull");
}
else{
    throw new Error("DB game");
}
app.listen(3001, () => {
    console.log("SERVER STARTED !");
});







