const express = require("express");
const cors = require("cors");
require("dotenv").config();
const db = require("./prisma/db");
// import routes
const categories_route = require("./app/categories/routes/CategoriesRoute");
const images_route = require("./app/images/routes/ImagesRoute");
const navigation_route = require("./app/navigation/routes/NavigationRoute");
// initialization
const PORT = process.env.PORT || 8080;
const app = express();

// middlewares
app.use(cors());
app.use(
  express.urlencoded({
    extended: false,
  })
);
app.use(express.json());

// routing
app.use(navigation_route);
app.use(categories_route);
app.use(images_route);

app.listen(PORT, () => console.log(`Server is running in port ${PORT}`));
