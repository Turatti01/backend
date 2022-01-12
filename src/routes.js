const express = require("express");
const router = express.Router();
const connection = require("./database/connection");
const UsersController = require("./controllers/UsersController");
const AuthController = require("./controllers/AuthController");
const PetsController = require("./controllers/PetsController");
const VacinaController = require("./controllers/VacinaController");
const MedicamentosController = require("./controllers/MedicamentosController");
const multer = require("multer");
const multerConfig = require("./config/multerConfig");

//user
router.post("/users.create", UsersController.createUser);
router.post("/login", AuthController.login);

//pet
router.get("/pets.list/:id", PetsController.listUserPet);
router.get("/pet.list/:id", PetsController.listPet);
router.post(
  "/pets.create",
  multer(multerConfig).single("file"),
  PetsController.createPet
);
router.post("/pet.delete/:id", PetsController.deletePet);

//vacina
router.post("/vacina.create/:id", VacinaController.createVacina);
router.get("/vacina.list/:id", VacinaController.listPetVacina);
router.post("/addDose/:id", VacinaController.addNewDose);

router.post(
  "/medicamentos.create/:id",
  MedicamentosController.createMedicamentos
);
router.get(
  "/medicamentos.list/:id",
  MedicamentosController.listPetMedicamentos
);

module.exports = router;
