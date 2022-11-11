const {db} = require("../models/index.js");

const resources = db.resources;

// Create resource
const addResource = async (req, res) => {
  let info = {
    resource_name: req.body.resource_name,
    status: req.body.status ? req.body.status : false,
    is_deleted: req.body.is_deleted ? req.body.is_deleted : false,
  };
  const resource = await resources.create(info);
  res.status(200).send(resource);
  console.log(resource);
};

// Get all Resource
const getAllResources = async (req, res) => {
  let resource = await resources.findAll({
    attributes: [
      "id",
      "resource_name",
      "status",
      "is_deleted",
    ],
  });
  res.status(200).send(resource);
};

// Get single resource
const getOneResource = async (req, res) => {
  let id = req.params.id;
  let resource = await resources.findOne({
    where: { id: id },
    attributes: [
      "id",
      "resource_name",
      "status",
      "is_deleted",
    ],
  });
  res.status(200).send(resource);
};

// Update Resource
const updateResource = async (req, res) => {
  let id = req.params.id;
  const resource = await resources.update(req.body, { where: { id: id } });
  res.status(200).send(resource);
};

// Delete Resource
const deleteResource = async (req, res) => {
  let id = req.params.id;
  await resources.destroy({ where: { id: id } });
  res.status(200).send("Resource is deleted !");
};

module.exports = {
  addResource,
  getAllResources,
  getOneResource,
  updateResource,
  deleteResource,
};
