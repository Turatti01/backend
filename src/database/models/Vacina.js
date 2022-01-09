"use strict";
module.exports = (sequelize, DataTypes) => {
  const Vacina = sequelize.define(
    "vacina",
    {
      id: {
        type: DataTypes.UUID,
        primaryKey: true,
        defaultValue: DataTypes.UUIDV4,
        allowNull: false,
      },
      nome: {
        type: DataTypes.STRING,
        allowNull: false,
      },
      dose: {
        type: DataTypes.STRING,
      },
      totaldoses: {
        type: DataTypes.STRING,
      },
      doseinicial: {
        type: DataTypes.STRING,
      },
      data: {
        type: DataTypes.STRING,
      },
      intervalo: {
        type: DataTypes.INTEGER,
      },
      descricao: {
        type: DataTypes.TEXT,
        allowNull: false,
      },
    },
    {
      underscored: true,
    }
  );
  return Vacina;
};
