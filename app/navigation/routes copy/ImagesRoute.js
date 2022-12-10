const express = require("express");
const {
  images_create,
  imagesById,
  images_all,
  images_delete,
  images_edit,
} = require("../controllers/NavigationController");

// import controller
const images_route = express.Router();

images_route.post("/api/images", images_create);
images_route.get("/api/images", images_all);
images_route.get("/api/images/:id", imagesById);
images_route.patch("/api/images/:id", images_edit);
images_route.delete("/api/images/:id", images_delete);

module.exports = images_route;
