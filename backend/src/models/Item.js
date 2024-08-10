require('dotenv').config(); // Load environment variables from .env file

const { Sequelize, DataTypes } = require('sequelize');

// Use environment variables for Sequelize configuration
const sequelize = new Sequelize(
  process.env.POSTGRES_DB,      // Database name
  process.env.POSTGRES_USER,    // Database user
  process.env.POSTGRES_PASSWORD, // Database password
  {
    host: process.env.POSTGRES_HOST, // Database host
    dialect: 'postgres'              // Database dialect
  }
);

const Item = sequelize.define('Item', {
  name: {
    type: DataTypes.STRING,
    allowNull: false
  },
  price: {
    type: DataTypes.FLOAT,
    allowNull: false
  }
});

module.exports = {
  sequelize,
  Item
};
