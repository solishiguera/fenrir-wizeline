require("dotenv").config();
const { Sequelize } = require('sequelize');

const connection = `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`
const sequelize = new Sequelize(connection)

module.exports = sequelize;

