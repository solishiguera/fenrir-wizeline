require("dotenv").config();
const { Sequelize } = require('sequelize');

//const connection = `postgres://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`
const connection = `postgres://ls-f983eab63bdedab98e6d497c1ae8716a2dadaa12.chmqwurvd2xb.us-east-1.rds.amazonaws.com:5432/dbmasteruser`
const sequelize = new Sequelize(connection)

module.exports = sequelize;