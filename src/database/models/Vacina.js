'use strict'
module.exports = (sequelize, DataTypes) => {
    const Vacina = sequelize.define('vacina', {
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
        data1: {
            type: DataTypes.STRING,
            allowNull: false
        },
        data2: {
            type: DataTypes.STRING,
            allowNull: false
        },
        descricao: {
            type: DataTypes.TEXT,
            allowNull: false
        },
    }, {
        underscored: true,
    });
    return Vacina;
}