require("dotenv").config();
const { Sequelize } = require('sequelize');

// DEV
// const connectionDev = `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`
// const sequelize = new Sequelize(connectionDev)

const sequelize = new Sequelize(process.env.AWS_DATABASE, process.env.AWS_USER, process.env.AWS_PASSWORD, {
  host: process.env.AWS_HOST,
  dialect: 'postgres'
});

module.exports = sequelize;
