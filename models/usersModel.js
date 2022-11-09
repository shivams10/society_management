module.exports = (sequelize, DataTypes) => {
    const users = sequelize.define("users",{
        id: {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        first_name: {
            type : DataTypes.STRING,
            allowNull: false,
        },
        last_name: {
            type : DataTypes.STRING,
            allowNull: false,
        },
        contact: {
            type : DataTypes.STRING,
            allowNull: false,
        },
        email: {
            type : DataTypes.STRING,
            allowNull: false,
        },
        password: {
            type : DataTypes.STRING,
            allowNull: false,
        },
        token: {
            type : DataTypes.TEXT,
            allowNull: true,
        },
        is_admin: {
            type: DataTypes.BOOLEAN, 
            allowNull: false, 
            defaultValue: true
        },
        is_deleted: {
            type: DataTypes.BOOLEAN, 
            allowNull: true, 
            defaultValue: false
        },
    })

    return users;
}