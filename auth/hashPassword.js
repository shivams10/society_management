const bcrypt = require("bcrypt");

const createHash = async (password) => {
  return await bcrypt.hash(password, 10);
};

const compareHash = async (password, hashPassword) => {
  return await bcrypt.compare(password, hashPassword);
};

module.exports = {
  createHash,
  compareHash,
}; 