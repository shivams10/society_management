const { db } = require("../models/index");

const occupancies = db.occupancies;

// Create User
const addOccupancy = async (req, res) => {
  let info = {
    userId: req.body.userId,
    resourceId: req.body.resourceId,
    occupancy_date: req.body.occupancy_date,
    is_available: req.body.is_available ? req.body.is_available : false,
    is_deleted: req.body.is_deleted ? req.body.is_deleted : false,
  };
  const occupancy = await occupancies.create(info);
  res.status(200).send(occupancy);
  console.log(occupancy);
};

// Get all User
const getAllOccupancies = async (req, res) => {
  let occupancy = await occupancies.findAll({
    attributes: [
      "userId",
      "resourceId",
      "occupancy_date",
      "is_available",
      "is_deleted",
    ],
  });
  res.status(200).send(occupancy);
};

// Get single user
const getOneOccupancy = async (req, res) => {
  let id = req.params.id;
  let occupancy = await occupancies.findOne({
    where: { id: id },
    attributes: [
      "userId",
      "resourceId",
      "occupancy_date",
      "is_available",
      "is_deleted",
    ],
  });
  res.status(200).send(occupancy);
};

// Update User
const updateOccupancy = async (req, res) => {
  let id = req.params.id;
  const occupancy = await occupancies.update(req.body, { where: { id: id } });
  res.status(200).send(occupancy);
};

// Delete User
const deleteOccupancy = async (req, res) => {
  let id = req.params.id;
  await users.destroy({ where: { id: id } });
  res.status(200).send("Occupancy is deleted !");
};

module.exports = {
  addOccupancy,
  getAllOccupancies,
  getOneOccupancy,
  updateOccupancy,
  deleteOccupancy,
};
