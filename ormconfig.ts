module.exports = {
  type: 'mysql',
  host: process.env.DATABASE_URL,
  port: process.env.DB_PORT,
  username: process.env.DB_USERNAME,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  migrations: [process.env.MIGRATIONS],
  entities: [process.env.ENTITIES],
  cli: {
    migrationsDir: 'src/database/migrations',
    entitiesDir: 'src/app/models',
  },
}
