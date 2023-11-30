import  {secrets}  from "./secrets"

export const config ={db: {
  host: 'localhost',
  user: secrets.name,
  password: secrets.password,
  database: 'MJCave',
  connectTimeout: 60000
},
}