const connection = require('../database/connection')
const bcrypt = require('bcryptjs');


module.exports = {
    async createVacina(req, res){
        const id = req.params.id;
        try{
            const {nome, descricao, data1, data2} = req.body
            const vacina = await connection.vacina.create(
                {
                    nome: nome,
                    descricao: descricao,
                    petId: id,
                    data1: data1,
                    data2: data2
                }
            )
            res.json(vacina)
        } catch(error){
            res.status(500).send(new Error(error))
        }
    },
    async listPetVacina(req, res){
        try{
         const id = req.params.id;
         const list = await connection.vacina.findAll({
            where: { 
                petId: id
              }
            });
            res.json(list)
        }catch(error){
            console.log(error)
        }
    },
   
}
