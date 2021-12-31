const { Sequelize } = require('sequelize');

//database', 'username', 'password'
const sequelize = new Sequelize('teste', 'postgres', '123456', {
    host: 'localhost',
    dialect: 'postgres'
});

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


sequelize.sync({
 alter: true
})

db.sequelize.authenticate().then(() => {
    console.log("Banco conectado com sucesso :)");
}).catch((erro) => {
    console.log("Oops, algo deu errado na conexão com o banco :(" + erro);
});

module.exports = db;