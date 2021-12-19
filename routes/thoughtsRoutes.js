const express = require('express')
const router = express.Router()
const ThoughtController = require('../controllers/ThoughtController')

//helpers
const checkAuth = require('../helpers/auth').checkAuth

//controller

router.get('/add', checkAuth, ThoughtController.createThought)
router.post('/add', checkAuth, ThoughtController.createThoughtSave)
router.get('/edit/:id', checkAuth, ThoughtController.updateThought)
router.get('/dashboard', checkAuth, ThoughtController.dashboard)
router.post('/remove', checkAuth, ThoughtController.removeThought)
router.get('/', checkAuth, ThoughtController.showThoughts)

module.exports = router
