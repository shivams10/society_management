module.exports = (sequelize, DataTypes) => {
    const resources = sequelize.define("resources",{
        id: {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        resource_name: {
            type : DataTypes.STRING,
            allowNull: false,
        },
        status: {
            type: DataTypes.BOOLEAN, 
            allowNull: false, 
            defaultValue: false
        },
        is_deleted: {
            type: DataTypes.BOOLEAN, 
            allowNull: false, 
            defaultValue: false
        },
    })

    return resources;
}