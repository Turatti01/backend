const express = require('express');
const router = express.Router();
const connection = require('./database/connection');
const UsersController = require('./controllers/UsersController')
const AuthController = require('./controllers/AuthController')
const PetsController = require('./controllers/PetsController')
const VacinaController = require('./controllers/VacinaController')
const MedicamentosController = require('./controllers/MedicamentosController')

//user
router.post('/users.create', UsersController.createUser)
router.post('/login', AuthController.login)

//pet
router.get('/pets.list/:id', PetsController.listUserPet)
router.post('/pets.create', PetsController.createPet)

//vacina
router.post('/vacina.create/:id', VacinaController.createVacina)
router.get('/vacina.list/:id', VacinaController.listPetVacina)

router.post('/medicamentos.create/:id', MedicamentosController.createMedicamentos)
router.get('/medicamentos.list/:id', MedicamentosController.listPetMedicamentos)

module.exports = router;    