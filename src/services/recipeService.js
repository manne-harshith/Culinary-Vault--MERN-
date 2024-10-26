const {recipes}=require('../models/index')

async function getAllRecipes(){
    return await recipes.find().exec()
}
const recipeService={
    getAllRecipes
}
module.exports=recipeService