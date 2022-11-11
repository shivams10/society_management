
module.exports = (sequelize, DataTypes) => {
    const occupancies = sequelize.define("occupancies",{
        id: {
            type : DataTypes.INTEGER,
            primaryKey: true,
            autoIncrement: true
        },
        is_available: {
            type: DataTypes.BOOLEAN, 
            allowNull: false, 
            defaultValue: true
        },
        occupancy_date: {
            type: DataTypes.DATE,
            allowNull: false,
        },
        is_deleted: {
            type: DataTypes.BOOLEAN, 
            allowNull: false, 
            defaultValue: false
        }
    },{
      timestamps: false,

  // I don't want createdAt
  createdAt: false,
  updatedAt: false,



    });

    return occupancies;
}