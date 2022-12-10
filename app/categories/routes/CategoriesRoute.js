const express = require("express");
const {
  categories_create,
  categoriesById,
  categories_all,
  categories_delete,
  categories_edit,
} = require("../controllers/CategoriesController");

// import controller
const categories_route = express.Router();

categories_route.post("/api/categories", categories_create);
categories_route.get("/api/categories", categories_all);
categories_route.get("/api/categories/:id", categoriesById);
categories_route.patch("/api/categories/:id", categories_edit);
categories_route.delete("/api/categories/:id", categories_delete);

module.exports = categories_route;
