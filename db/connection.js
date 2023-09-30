import { Sequelize } from 'sequelize'

// Creación de la instancia de Sequelize
const db = new Sequelize(
  'gxhsoaku', // DB name
  'gxhsoaku', // User
  'aNPPc4v7xooMlYxmiWAnHzFPJVxIeA-2', // Password
  {
    host: 'floppy.db.elephantsql.com',
    dialect: 'postgres',
    logging: true
  }
)

export default db
