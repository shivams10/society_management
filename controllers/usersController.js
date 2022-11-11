const {db} = require("../models/index");
const {loginUser} = require("../services/loginService.js")
 const {createHash} = require("../auth/hashPassword");
const users = db.users;

// Create User
const addUser = async (req, res) => {
  let password = await createHash(req.body.password);
  let info = {
    first_name: req.body.first_name,
    last_name: req.body.last_name,
    contact: req.body.contact,
    email: req.body.email,
    password: password,
    token: req.body.token,
    is_admin: req.body.is_admin ? req.body.is_admin : false,
    is_deleted: req.body.is_deleted ? req.body.is_deleted : false,
  };
  const user = await users.create(info); 
  res.status(200).send(user);
  console.log(user);
};

// Login 
const login = (req, res) => {
 loginUser({ ...req.body }, (err, result, status_code) => {
      if (err) {
          return res.status(status_code).json({ error: err });
      }
      console.log(result.token);
      res.cookie("token", result.token, { expire: new Date() + 100000 });
      return res.status(status_code).json({ result });
  });
};


// Get all User
const getAllUsers = async (req, res) => {
  let user = await users.findAll({
    attributes: [
      "id",
      "first_name",
      "last_name",
      "email",
      "contact",
      "is_admin",
      "is_deleted",
    ],
  });
  res.status(200).send(user);
};

// Get single user
const getOneUser = async (req, res) => {
  let id = req.params.id;
  let user = await users.findOne({
    where: { id: id },
    attributes: [
      "id",
      "first_name",
      "last_name",
      "email",
      "contact",
      "is_admin",
      "is_deleted",
    ],
  });
  res.status(200).send(user);
};

// Update User
const updateUser = async (req, res) => {
  let id = req.params.id;
  const user = await users.update(req.body, { where: { id: id } });
  res.status(200).send(user);
};

// Delete User
const deleteUser = async (req, res) => {
  let id = req.params.id;
  await users.destroy({ where: { id: id } });
  res.status(200).send("User is deleted !");
};

module.exports = {
  addUser,
  login,
  getAllUsers,
  getOneUser,
  updateUser,
  deleteUser,
};
