const connection = require('../database/connection')
const bcrypt = require('bcryptjs');


module.exports = {
    async createPet(req, res){
        try{
            console.log(req.body)
    
            const {nome,tipo, raca, idade, cor, dataani, anidotado, temperamento, castrado, userId} = req.body
            const pets = await connection.pets.create(
                {
                    nome: nome,
                    userId: userId,
                    tipo: tipo,
                    raca : raca,
                    idade: idade,
                    cor: cor,
                    dataani: dataani,
                    anidotado: anidotado,
                    temperamento: temperamento,
                    castrado: castrado
                }
            )
            res.json(pets)
        } catch(error){
            res.send("Erro")
            console.log(error)
        }
    },
    async listUserPet(req, res){
        try{
            console.log(req.params.id)
         const id = req.params.id;
         const list = await connection.pets.findAll({
            where: { 
                userId: id
              }
            });
            res.json(list)
        }catch(error){
            console.log(error)
        }
    },
    // async listUserPetVacina(req, res){
    //     try{
    //     const id = req.params.id;
    //     // FAZER REQUISIÇÃO COM INNER JOIN
    //     // const list = await connection.pets.findAll({
    //     // where: { 
    //     //     userId: id
    //     //     }
    //     // });
    //     res.json(list)
    //     }catch(error){
    //         console.log(error)
    //     }
    // }
}
