const { use } = require('express/lib/application');
const { user } = require('pg/lib/defaults');
const { Sequelize } = require('sequelize');

const database = 'dfk9vgcuhkubg0'
const username = 'wjapwxvdtkgaun'
const password = 'a04edfebc1ee1e76065677a71591bedd5578e07a8dd01c1d371aa9fe68294f5c'
const host = 'ec2-54-83-157-174.compute-1.amazonaws.com'

const sequelize = new Sequelize(
    database, username, password, 
    {
        host: host,
        port: 5432,
        dialect: 'postgres',
        dialectOptions: {
            ssl: {
                require: true,
                rejectUnauthorized: false
            }
         },
    },
);

const db = {}; 

db.Sequelize = Sequelize;
db.sequelize = sequelize;

db.users = require('./models/Users')(sequelize, Sequelize);
db.posts = require('./models/Posts')(sequelize, Sequelize);
db.pets = require('./models/Pets')(sequelize, Sequelize);
db.vacina = require('./models/Vacina')(sequelize, Sequelize);
db.medicamentos = require('./models/Medicamentos')(sequelize, Sequelize);
db.users.hasMany(db.posts);
db.users.hasMany(db.pets);  
db.pets.hasMany(db.vacina);
db.pets.hasMany(db.medicamentos);
db.vacina.belongsTo(db.pets);
db.medicamentos.belongsTo(db.pets);


// sequelize.sync({
//  alter: true
// })

db.sequelize.authenticate().then(() => {
    console.log("👨‍💻 Banco conectado com sucesso :)");
}).catch((erro) => {
    console.log("👺 Oops, algo deu errado na conexão com o banco :(", erro);
});

module.exports = db;