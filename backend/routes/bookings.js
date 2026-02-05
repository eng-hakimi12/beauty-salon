const { Router } = require('express')
const {
  getBookings,
  getBookingById,
  createBooking,
} = require('../controllers/bookingsController')

const router = Router()

router.get('/', getBookings)
router.get('/:id', getBookingById)
router.post('/', createBooking)

module.exports = router

