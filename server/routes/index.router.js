const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller')

const auth = require('../config/auth')

router.post('/register', ctrlUser.register)
router.post('/authenticate', ctrlUser.authenticate)
router.get('/patients', auth.verifyJwtToken, ctrlUser.getPatients)



module.exports = router;