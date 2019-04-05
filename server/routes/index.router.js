const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller')
const ctrlClinic = require('../controllers/clinic.visit.controller')

const auth = require('../config/auth')

//User Routes
router.post('/register', ctrlUser.register)
router.post('/authenticate', ctrlUser.authenticate)
//Patient Routes
router.get('/patients', auth.verifyJwtToken, ctrlUser.getPatients)
//Clinical Vist Routes
router.post('/clinic', auth.verifyJwtToken, ctrlClinic.create)
router.get('/clinic', auth.verifyJwtToken, ctrlClinic.list)
router.get('/clinic/:id', auth.verifyJwtToken, ctrlClinic.getClinicbyId)
router.post('/clinic/:id', auth.verifyJwtToken, ctrlClinic.updateClinic)
router.delete('/clinic/:id', auth.verifyJwtToken, ctrlClinic.deleteClinic)

//Daily Info Routes


module.exports = router;