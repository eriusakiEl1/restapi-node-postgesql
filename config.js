const DATABASE_HOST = process.env.DATABASE_HOST || "localhost";
const DATABASE_PASSWORD = process.env.DATABASE_PASSWORD || "admin";
const DATABASE_NAME = process.env.DATABASE_NAME || "firstsapi";
const DATABASE_PORT = process.env.DATABASE_PORT || "5454";
const DATABASE_USER = process.env.DATABASE_USER || "admin";

module.exports = {
    DATABASE_HOST,
    DATABASE_NAME,
    DATABASE_PASSWORD,
    DATABASE_PORT,
    DATABASE_USER
};