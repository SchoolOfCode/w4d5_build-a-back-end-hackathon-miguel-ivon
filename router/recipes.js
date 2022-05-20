/* - Import recipes from recipes-data
-create a variable to store express router function
 - Create router handler
 - export the recipesRouter

*/

import express from "express";
import recipes from "../libs/recipes.js";
const router = express.Router();

router.get("/", function (req, res) {
    const responseObject = { success : true, message: `Here is your recipe`, payload: recipes };
    res.json(responseObject)
})

router.get("/:id", function (req,res) {
    const recipeId = req.params.id;
    let searchedRecipes = [];
    for (let i = 0; i < recipes.length; i++) {
        if (Number(recipeId) === recipes[i].id) {
            searchedRecipes.push(recipes[i]);
        }
    }
    const responseObject = { success: true, message: `Here is your recipe with id ${recipeId}`, payload: searchedRecipes};
    res.json(responseObject);
});

router.post("/", function(req,res) {
    const body = req.body;
    recipes.push(body);

    const responseObject = { success: true, message: `Here is your new recipe`, payload: recipes };
    res.json(responseObject)
})

router.put("/:id", function(req,res) {
    const recipeId = req.params.id;
    const body = req.body;
    

    for (let i = 0; i < recipes.length; i++) {
        if (Number(recipeId) === recipes[i].id) {
            recipes[i] = body;
        }
    }
    const responseObject = { success: true, message: `Here is your updated recipe`, payload: body };
    res.json(responseObject);
})


export default router;
