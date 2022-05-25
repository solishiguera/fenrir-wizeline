/** @deprecated Will be deleted soon. Use sequelize (db.js instead)  */
const Pool = require("pg").Pool;
require("dotenv").config();
const isProduction = process.env.NODE_ENV === "production";
const connectionString = `postgresql://${process.env.PG_USER}:${process.env.PG_PASSWORD}@${process.env.PG_HOST}:${process.env.PG_PORT}/${process.env.PG_DATABASE}`;

const pool = new Pool({
    connectionString: isProduction ? process.env.DATABASE_URL : connectionString,
    ssl: { // Para correr en dev, se debe comentar esto
        rejectUnauthorized: false,
    },
});

module.exports = pool;