/* - Import recipes from recipes-data
-create a variable to store express router function
 - Create router handler
 - export the recipesRouter
 
*/

import express from "express";
import recipes from "../libs/recipes.js";
const router = express.Router();

router.get("/", function (req, res) {
    const responseArray = { success : true, message: `Here is your recipe`, payload: recipes };
    res.json(responseArray)
})

export default router;
