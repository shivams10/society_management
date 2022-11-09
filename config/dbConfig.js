module.exports = {
    HOST : "localhost",
    USER : "root",
    PASSWORD: "Shivam@1121025",
    DB: "society_management",
    dialect: "mysql",

    pool: {
        max: 15,
        min: 0,
        acquire: 30000,
        idle: 10000
    }
}