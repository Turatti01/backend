const connection = require("../database/connection");
const bcrypt = require("bcryptjs");

module.exports = {
  async createVacina(req, res) {
    const id = req.params.id;
    try {
      const { nome, descricao, data1, data2 } = req.body;
      const vacina = await connection.vacina.create({
        nome: nome,
        descricao: descricao,
        petId: id,
        data1: data1,
        data2: data2,
        completo: false,
      });
      res.json(vacina);
    } catch (error) {
      res.status(500).send(new Error(error));
    }
  },
  async addNewDose(req, res) {
    console.log(req.params.id);
    const id = req.params.id;
    try {
      const vacina = await connection.vacina.findOne({
        where: {
          id: id,
        },
      });
      if (vacina) {
        console.log(vacina);
        vacina.data2 = req.body.data2;
        vacina.completo = true;
        vacina.save();
        res.send(vacina);
      }
    } catch (err) {
      console.log(err);
    }
  },
  async listPetVacina(req, res) {
    try {
      const id = req.params.id;
      const list = await connection.vacina.findAll({
        where: {
          petId: id,
        },
      });
      res.json(list);
    } catch (error) {
      console.log(error);
    }
  },
  async deleteVacina(req, res) {
    try {
      const id = req.params.id;
      await connection.vacina.destroy({
        where: {
          id: id,
        },
      });
      res.status(200);
      res.json(id);
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  },
};
