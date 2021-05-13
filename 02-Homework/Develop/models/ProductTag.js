const { Model, DataTypes } = require('sequelize');

const sequelize = require('../config/connection');

class ProductTag extends Model {}

ProductTag.init(
  {
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      allowNull: false, 
      autoIncrement: true
      },

      productId: {
        type: DataTypes.INTEGER, 
        references: "products", 
        referencesKey: "id",
      },

      tagId: {
        type: DataTypes.INTEGER,
        references: "tags", 
        referencesKey: "id",
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product_tag',
  }
);

module.exports = ProductTag;
