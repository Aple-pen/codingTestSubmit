var fs = require('fs');
var data = fs.readFileSync('./bread.json','utf-8');
var words=JSON.parse(data);

Object.keys(words).map((value)=>{
    var keys = Object.keys(words[value])
    var breadType = keys[0]
    var recipe = keys[1]
    var recipeValue = words[value].recipe
    console.log(breadType +"\n"+ words[value].breadType);
    console.log(recipe)
    Object.keys(recipeValue).map((value)=>{
        console.log(value + " : " + recipeValue[value])
    })
    console.log();
})