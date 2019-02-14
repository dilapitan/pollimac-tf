module.exports = {
  port: process.env.PORT || 8081,
  db: {
    database: process.env.DB_NAME || 'pollimac',
    user: process.env.DB_USER || 'pollimac',
    password: process.env.DB_PASS || 'pollimac',
    options: {
      dialect: process.env.DIALECT || 'sqlite',
      host: process.env.HOST || 'localhost',
      operatorsAliases: false,
      storage: './pollimac.sqlite'
    }
  },
  authentication: {
    jwtSecret: process.env.JWT_SECRET || 'secret'
  }
}

