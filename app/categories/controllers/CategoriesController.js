const db = require("../../../prisma/db");

// create category
const categories_create = async (req, res) => {
  try {
    const { name, logo, description, svgcolor } = req.body;

    const createcategories = await db.categories.create({
      data: {
        name: name,
        logo: logo,
        description: description,
        svgcolor: svgcolor,
      },
    });
    return res.status(201).json({
      status: 201,
      message: "terbuat",
      data: createcategories,
    });
  } catch (error) {
    console.error(error);
  }
};

//FIND ALL
const categories_all = async (req, res) => {
  try {
    const categoriesData = await db.categories.findMany({
      include: {
        products: {
          include: {
            images: true,
          },
        },
      },
    });
    return res.status(200).json({
      status: "Ok",
      data: categoriesData,
    });
  } catch (error) {
    console.error(error);
  }
};

//FIND BY ID
const categoriesById = async (req, res) => {
  try {
    const { id } = req.params;
    const productsData = await db.products.findUnique({
      where: {
        id: parseInt(id),
      },
      include: {
        images: true,
      },
    });
    return res.status(200).json({
      status: "success",
      data: productsData,
    });
  } catch (error) {
    console.error(error);
  }
};

//edit category
const categories_edit = async (req, res) => {
  try {
    const id = req.params.id;
    const { name, logo, description, svgcolor } = req.body;

    const updateCategories = await db.categories.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name: name,
        logo: logo,
        description: description,
        svgcolor: svgcolor,
      },
    });

    res.status(200).json({
      status: 200,
      message: "OK",
      data: updateCategories,
    });
  } catch (error) {
    console.error(error);
  }
};

//Delete

const categories_delete = async (res, req) => {
  try {
    const id = req.params.id;

    const deleteCategories = await db.categories.delete({
      where: {
        id: parseInt(id),
      },
    });
    return res.status(200).json({
      status: "200",
      message: "deleted" + deleteCategories,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  categories_create,
  categoriesById,
  categories_all,
  categories_delete,
  categories_edit,
};
