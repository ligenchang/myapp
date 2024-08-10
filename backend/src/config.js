// backend/src/config.js
require('dotenv').config();

module.exports = {
  port: process.env.PORT,
  database: {
    dialect: process.env.DATABASE_DIALECT,
    storage: process.env.DATABASE_STORAGE
  }
};