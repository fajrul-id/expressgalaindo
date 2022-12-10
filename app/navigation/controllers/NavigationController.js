const db = require("../../../prisma/db");
const { request, response } = require("express");
// create Nav
const navigation_create = async (req = request, res = response) => {
  try {
    const { path, name } = req.body;
    const createNavigation = await db.navigation.create({
      data: {
        path: path,
        name: name,
      },
    });
    return res.status(201).json({
      status: 201,
      message: "terbuat",
      data: createNavigation,
    });
  } catch (error) {
    console.error(error);
  }
};

//FIND ALL
const navigation_all = async (req, res) => {
  try {
    const NavigationData = await db.navigation.findMany();
    return res.status(200).json({
      status: "success",
      data: NavigationData,
    });
  } catch (error) {
    console.error(error);
  }
};

//FIND BY ID
const navigationById = async (req, res) => {
  try {
    const { id } = req.params;
    const imagesData = await db.navigation.findUnique({
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

//edit Navigation
const navigation_edit = async (req, res) => {
  try {
    const { id } = req.params;
    const { path, name } = req.body;

    const updateNavigation = await db.navigation.update({
      where: {
        id: parseInt(id),
      },
      data: {
        name: name,
        path: path,
      },
    });

    res.status(200).json({
      status: 200,
      message: "OK",
      data: updateNavigation,
    });
  } catch (error) {
    console.error(error);
  }
};

//Delete

const navigation_delete = async (res, req) => {
  try {
    const id = req.params.id;

    const deleteNavigation = await db.navigation.delete({
      where: {
        id: parseInt(id),
      },
    });
    return res.status(200).json({
      status: "200",
      message: "deleted" + deleteNavigation,
    });
  } catch (error) {
    console.error(error);
  }
};

module.exports = {
  navigation_create,
  navigationById,
  navigation_all,
  navigation_delete,
  navigation_edit,
};
