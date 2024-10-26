const express=require('express')
const recipeRoute=new express.Router()

const recipeService=require("../services/recipeService")

recipeRoute.get('/',async (req,res) =>{
    res.json(await recipeService.getAllRecipes() )
})

module.exports=recipeRoute