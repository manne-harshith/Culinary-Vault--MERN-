const mongoose = require('mongoose')

const recipesSchema = new mongoose.Schema({
    ItemName: String,
    ItemIngredients: String,
    ItemDescription: String

})

const recipes = mongoose.model('recipes', recipesSchema)

module.exports = {
    recipes
}
