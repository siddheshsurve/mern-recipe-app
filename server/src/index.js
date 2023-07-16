import express from "express";
import cors from 'cors';
import mongoose from "mongoose";
import {userRouter} from './routes/users.js';

const app = express();

app.use(express.json());
app.use(cors());
app.use("/auth", userRouter);


mongoose.connect("mongodb+srv://admin:admin8390@recipe.lmagwiq.mongodb.net/");

app.listen(3001, () => {
    console.log("SERVER STARTED !");
});







