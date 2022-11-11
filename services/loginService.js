const { createToken } = require("../auth/jwtToken")
const { compareHash} = require("../auth/hashPassword");
const User = require("../models/index").db.users


module.exports = {
    loginUser : async(data, callback) => {
        try{
            const user = await  User.findOne({ where: { email: data.email } });
            if (!user) {
                return callback({ error: "User Doesnot Exist" }, null, 401);
            }
            const userId = user.dataValues.id;
            const userType = user.dataValues.type;
            let validate_password = await compareHash(
                data.password,
                user.dataValues.password
            );
            if (validate_password) {
                const token = createToken({
                    id: userId,
                    type: userType,
                });
                return callback(
                    null,
                    { message: "Login Successfull", token: token },
                    200
                );
            } else {
                return callback({ error: "Wrong Credentials" }, null, 401);
            }
        }
        catch (error) {
            return callback({ error: error }, null, 503);
        }
    }
}