const { Router } = require('express')
const {
  getServices,
  createService,
  getServiceById,
} = require('../controllers/servicesController')

const router = Router()

router.get('/', getServices)
router.post('/', createService)
router.get('/:id', getServiceById)

module.exports = router
