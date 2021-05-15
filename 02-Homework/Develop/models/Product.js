// import important parts of sequelize library
const { Model, DataTypes } = require('sequelize');
// import our database connection from config.js
const sequelize = require('../config/connection');

// Initialize Product model (table) by extending off Sequelize's Model class
class Product extends Model {}

// set up fields and rules for Product model
Product.init(
  {
    id: {
      type: DataTypes.INTEGER, 
      primaryKey: true, 
      allowNull: false, 
      autoIncrement: true
      },

      productName: {
        type: DataTypes.STRING,
        allowNull: false,
      },

      price: {
        type: DataTypes.DECIMAL,
        validate: {
          isDecimal: true,
        },
        allowNull: false,
      },

      stock: {
        type: DataTypes.INTEGER,
        validate: {
          isNumeric: true,
        },
        allowNull: false,
        defaultValue: 10,

      },

      categoryId: {
        type: DataTypes.INTEGER,
        references:{
          model: 'categories', 
          key: 'id',
        }
      },
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'product',
  }
);

module.exports = Product;
