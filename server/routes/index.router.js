const express = require('express');
const router = express.Router();

const ctrlUser = require('../controllers/user.controller')
const ctrlClinic = require('../controllers/clinic.visit.controller')
const ctrlDailyInfo = require('../controllers/daily.info.controller')
const ctrlTips = require('../controllers/tips.controller')


const auth = require('../config/auth')

//User Routes
router.post('/register', ctrlUser.register)
router.post('/authenticate', ctrlUser.authenticate)

//Patient Routes
router.get('/nurse/patients', ctrlUser.getPatients)

//Clinical Vist Routes
router.post('/nurse/clinic', ctrlClinic.create)
router.get('/nurse/clinic', ctrlClinic.list)
router.get('/nurse/clinic/:id', ctrlClinic.getClinicbyId)
router.post('/nurse/clinic/:id', ctrlClinic.updateClinic)
router.delete('/nurse/clinic/:id', ctrlClinic.deleteClinic)

//Daily Info Routes
//--Patient Role
router.post('/patient/daily', ctrlDailyInfo.create)
router.get('/patient/daily', ctrlDailyInfo.listbyId)
router.get('/patient/daily/:id', ctrlDailyInfo.getDailyInfobyId)
router.post('/patient/daily/:id', ctrlDailyInfo.updateDailyInfo)
router.delete('/patient/daily/:id', ctrlDailyInfo.deleteDailyInfo)
//--Nurse Role
router.get('/nurse/daily', ctrlDailyInfo.list)
router.get('/nurse/daily/:id', ctrlDailyInfo.getDailyInfobyId)


//Tips Routes
//-Nurse Role
router.post('/nurse/tips', ctrlTips.create)
router.get('/nurse/tips', ctrlTips.list)
router.get('/nurse/tips/:id', ctrlTips.getTipsbyId)
router.post('/nurse/tips/:id', ctrlTips.updateTips)
router.delete('/nurse/tips/:id', ctrlTips.deleteTips)
//-Patient Role
router.get('/patient/tips', ctrlTips.listbyId)
router.get('/patient/tips/:id', ctrlTips.getTipsbyId)


module.exports = router;