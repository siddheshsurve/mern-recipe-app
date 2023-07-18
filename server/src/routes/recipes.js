import express from "express";
import mongoose from "mongoose";
import { UserModel } from "../models/Users.js";
import { RecipesModel } from "../models/Recipes.js";

const router = express.Router();

router.get("/", async (req, res) => {
    try {
        const response = await RecipesModel.find({});
        res.json(response);
    } catch(err) {
        res.json(err);
    }
})

router.post("/", async (req, res) => {

    const recipe = new RecipesModel(req.body);

    try {
        const response = await recipe.save();
        res.json(response);
    } catch(err) {
        res.json(err);
    }
})

router.put("/", async (req, res) => {

    try {
        const recipe = await RecipesModel.findById(req.body.recipeID)
        const user = await UserModel.findById(req.body.userID)
        user.savedRecipes.push(recipe);
        await user.save();
        res.json({savedRecipes : user.savedRecipes});
    } catch(err) {
        res.json(err);
    }
})

router.get("/savedRecipes/ids", async (req, res) => {
    try {
        const user = await UserModel.findById(req.body.userID)
        res.json({savedRecipes : user?.savedRecipes})
    } catch(err) {
        res.json(err);
    }
});

router.get("/savedRecipes", async (req, res) => {
    try {
        const user = await UserModel.findById(req.body.userID)
        const savedRecipes = await RecipesModel.find({
            _id: { $in: user.savedRecipes },
        });
        res.json({savedRecipes})
    } catch(err) {
        res.json(err);
    }
});

export {router as recipeRouter};