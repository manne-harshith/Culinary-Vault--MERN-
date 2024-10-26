const express = require('express')
const app=express()
const recipeRoute=require('./routes/recipe.route')
const mongoose = require('mongoose')
const cors = require('cors')

mongoose.connect('mongodb+srv://uppalasaiteja2003:t4vbu78iNAbhLXUe@cluster0.nilwvwl.mongodb.net/RecipesDB?retryWrites=true&w=majority')
const db = mongoose.connection

db.on('error', err => console.log('Error while connecting'))
db.once('open', function(){
    console.log('Connected to mongodb')
    app.listen(5000, () => {
        console.log('Server is running..')
    })
})

app.use(express.json() )
app.use(cors())
app.use("/", recipeRoute)