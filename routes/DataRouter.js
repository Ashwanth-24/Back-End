const express = require("express");
const router = express.Router();

const DataController = require("../controller/DataController");
const Validator = require("../MiddleWare/Validator");

router.post('/useradd', Validator.userValidation, DataController.addNew );
router.get('/userview', DataController.viewNew);
router.get('/viewById/:id', DataController.viewById);
router.get('/viewByName/:name', DataController.viewByName);
router.put('/userupdate/:id', DataController.Update);
router.delete('/userdelete/:id', DataController.Delete);
router.post('/userbcrypt', Validator.userValidation, DataController.Userbcrypt);



module.exports = router; 