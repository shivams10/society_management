const jwt = require("jsonwebtoken");
require("dotenv").config();

const createToken = (data) => {
  const token = jwt.sign(data, process.env.SECRET_KEY);
  return token;
};

const validateToken = (token) => {
  return jwt.verify(token, process.env.SECRET_KEY, (err, result) => {
    return err ? (
        console.log(err),
        null
    ) : result;
  });
};

module.exports = { createToken, validateToken };
