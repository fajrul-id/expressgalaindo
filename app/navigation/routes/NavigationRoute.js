const express = require("express");
const {
  navigation_create,
  navigationById,
  navigation_all,
  navigation_delete,
  navigation_edit,
} = require("../controllers/NavigationController");

// import controller
const navigation_route = express.Router();

navigation_route.post("/api/navigation", navigation_create);
navigation_route.get("/api/navigation", navigation_all);
navigation_route.get("/api/navigation/:id", navigationById);
navigation_route.patch("/api/navigation/:id", navigation_edit);
navigation_route.delete("/api/navigation/:id", navigation_delete);

module.exports = navigation_route;
