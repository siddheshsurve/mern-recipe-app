import express from "express";
import cors from 'cors';
import mongoose from "mongoose";

const app = express();

app.use(express.json());
app.use(cors());

mongoose.connect("mongodb+srv://admin:admin8390@recipe.lmagwiq.mongodb.net/");

app.listen(3001, () => {
    console.log("SERVER STARTED !");
});







