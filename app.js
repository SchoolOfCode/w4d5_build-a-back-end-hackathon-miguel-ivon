/* - Install our dependencies - npm i express
- import recipes from recipes-data
- import recipesRouter from recipes router
- created app.use for the router path to access imported recipes.


*/

import express from "express";

import { html } from "./config.js";

import recipes from "./libs/recipes.js";
import recipesRouter from "./router/recipes.js";

const app = express();
const PORT = 3000;

app.use(express.static("public"));
app.use(express.json());
app.use("/recipes", recipesRouter);

/* DO NOT CHANGE THIS ROUTE - it serves our front-end */
app.get("/", function (req, res) {
  res.sendFile(html);
});

app.listen(PORT, () => {
  console.log(`Listening on port ${PORT}`);
});
