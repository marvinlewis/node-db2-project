// Update with your config settings.

module.exports = {
  development: {
    client: "sqlite3",
    connection: {
      filename: "./data/car-dealer.db3",
    },
    useNullAsDefault: true,

    // ADD A DIRECTORY TO CREATE MIGRATION FILE WHEN RAN
    migrations: {
      tableName: "knex_migrations",
      directory: "./data/migrations",
    },
  },
};
