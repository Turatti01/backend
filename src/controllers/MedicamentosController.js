const connection = require("../database/connection");
const bcrypt = require("bcryptjs");

module.exports = {
  async createMedicamentos(req, res) {
    const id = req.params.id;
    try {
      const { nome, descricao, data1, data2 } = req.body;
      const medicamentos = await connection.medicamentos.create({
        nome: nome,
        descricao: descricao,
        petId: id,
        data1: data1,
        data2: data2,
      });
      res.json(medicamentos);
    } catch (error) {
      res.status(500).send(new Error(error));
    }
  },
  async listPetMedicamentos(req, res) {
    try {
      const id = req.params.id;
      const list = await connection.medicamentos.findAll({
        where: {
          petId: id,
        },
      });
      console.log(list);
      res.json(list);
    } catch (error) {
      console.log(error);
    }
  },
  async deleteMedicamento(req, res) {
    const id = req.params.id;
    try {
      await connection.medicamentos.destroy({
        where: {
          id: id,
        },
      });
      res.json(id);
      res.status(200);
    } catch (error) {
      console.log(error);
      res.status(500);
    }
  },
};
