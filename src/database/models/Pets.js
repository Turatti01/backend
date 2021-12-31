'use strict'
module.exports = (sequelize, DataTypes) => {
    const Pets = sequelize.define('pets', {
        id: {
            type: DataTypes.UUID,
            primaryKey: true,
            defaultValue: DataTypes.UUIDV4,
            allowNull: false
            
        },
        nome: {
            type: DataTypes.STRING,
            allowNull: false
        },
        tipo: {
            type: DataTypes.STRING,
            allowNull: false
        },
        raca: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        idade: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        cor: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        dataani: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        anidotado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
       
        temperamento: {
            type: DataTypes.STRING,
            allowNull: false,
        },
        castrado: {
            type: DataTypes.STRING,
            allowNull: false,
        },
    }, {
        underscored: true,
    });
    return Pets;
}