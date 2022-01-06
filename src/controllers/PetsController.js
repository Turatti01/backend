const connection = require("../database/connection");
const bcrypt = require("bcryptjs");

module.exports = {
  async createPet(req, res) {
    try {
      var url = "";
      if (req.file) {
        url = req.file.location;
      }

      const {
        nome,
        tipo,
        raca,
        idade,
        cor,
        dataani,
        anidotado,
        temperamento,
        castrado,
        userId,
      } = req.body;

      const pets = await connection.pets.create({
        nome: nome,
        userId: userId,
        tipo: tipo,
        raca: raca,
        idade: idade,
        cor: cor,
        dataani: dataani,
        anidotado: anidotado,
        temperamento: temperamento,
        castrado: castrado,
        img: url,
      });

      res.json(pets);
    } catch (error) {
      res.send("Erro");
    }
  },
  async listUserPet(req, res) {
    try {
      console.log(req.params.id);
      const id = req.params.id;
      const list = await connection.pets.findAll({
        where: {
          userId: id,
        },
      });
      res.json(list);
    } catch (error) {
      console.log(error);
    }
  },
  async listPet(req, res) {
    try {
      console.log(req.params.id);
      const id = req.params.id;
      const pet = await connection.pets.findOne({
        where: {
          id: id,
        },
      });
      console.log(pet);
      res.json(pet);
    } catch (error) {
      console.log(error);
    }
  },
  async deletePet(req, res) {
    const id = req.params.id;
    try {
      const pet = await connection.pets.destroy({
        where: {
          id: id,
        },
      });
      res.json(id);
    } catch (error) {
      console.log(error);
    }
  },
};
