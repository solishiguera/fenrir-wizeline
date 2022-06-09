require("dotenv").config();
const { Sequelize } = require('sequelize');

const connectionDev = `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`
const sequelize = process.env.NODE_ENV == 'development' ? new Sequelize(connectionDev) : new Sequelize(process.env.AWS_DATABASE, process.env.AWS_USER, process.env.AWS_PASSWORD, { host: process.env.AWS_HOST, dialect: 'postgres'})

module.exports = sequelize;