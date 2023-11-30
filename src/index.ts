import { Sequelize } from 'sequelize';
import  {config}  from "./config"

const App = async () => {

const sequelize = new Sequelize(
  config.db.database,  
  config.db.user, 
  config.db.password,
  {
  host: config.db.host,
  dialect: 'mysql' 
  }
);

try {
  await sequelize.authenticate();
  console.log('Connection has been established successfully.');
} catch (error) {
  console.error('Unable to connect to the database:', error);
}}

App()