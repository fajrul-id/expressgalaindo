const db = require("../../../prisma/db");

// create Images
const images_create = async (req, res) => {
  try {
    const { name, products_id, url } = req.body;

    const createImages = await db.images.create({
      name: name,
      products_id: products_id,
      url: url,
    });
    return res.status(201).json({
      status: 201,
      message: "terbuat",
      data: createImages,
    });
  } catch (error) {
    console.error(error);
  }
};

//FIND ALL
const images_all = async (req, res) => {
  try {
    const imagesData = await db.images.findMany();
    return res.status(200).json({
      status: "success",
      data: imagesData,
    });
  } catch (error) {
    console.error(error);
  }
};

//FIND BY ID
const imagesById = async (req, res) => {
  try {
    const { id } = req.params;
    const imagesData = await db.images.findUnique({
      where: {
        id: parseInt(id),
      },
    });
    return res.status(200).json({
      status: "success",
      data: imagesData,
    });
  } catch (error) {
    console.error(error);
  }
};

//edit images
const images_edit = async (req, res) => {
  try {
    const { id } = req.params;
    const { name, products_id, url } = req.body;

    const updateImages = await db.images.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name: name,
        products_id: products_id,
        url: url,
      },
    });

    res.status(200).json({
      status: 200,
      message: "OK",
      data: updateImages,
    });
  } catch (error) {
    console.error(error);
  }
};

//Delete

const images_delete = async (res, req) => {
  try {
    const id = req.params.id;

    const deleteImages = await db.images.delete({
      where: {
        id: parseInt(id),
      },
    });
    return res.status(200).json({
      status: "200",
      message: "deleted" + deleteImages,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  images_create,
  imagesById,
  images_all,
  images_delete,
  images_edit,
};
