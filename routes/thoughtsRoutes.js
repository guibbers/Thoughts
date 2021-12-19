const express = require('express')
const router = express.Router()
const ThoughtController = require('../controllers/ThoughtController')

//helpers
const checkAuth = require('../helpers/auth').checkAuth

//controller

router.get('/add', checkAuth, ThoughtController.createThought)
router.get('/dashboard', checkAuth, ThoughtController.dashboard)
router.get('/', checkAuth, ThoughtController.showThoughts)

module.exports = router
